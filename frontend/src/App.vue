<script setup lang="ts">
import { typeRampBaseFontSize, typeRampPlus2FontSize } from '@fluentui/web-components';
import { ref, computed, onMounted, watchEffect, ComponentPublicInstance } from 'vue';
import axios from 'axios';
import FVTextField from './components/fluent-wrapper/FVTextField.vue';
import FVComboBox from './components/fluent-wrapper/FVComboBox.vue';
import SignaturePad from './components/SignaturePad.vue';
import DialogComponent from './components/DialogComponent.vue';

typeRampBaseFontSize.withDefault(typeRampPlus2FontSize)

interface DialogComponentInstance extends ComponentPublicInstance {
  openDialog: () => void;
  closeDialog: () => void;
}
const dialogRef = ref<DialogComponentInstance | null>(null);

function openDialog() {
  dialogRef.value?.openDialog();
}

interface Row {
  [key: string]: string | number;
}

const columns: string[] = ['articleNumber', 'description', 'usage', 'costCenter', 'amount'];
const headers: string[] = ['Artikelnummer', 'Beschreibung', 'Verwendung', 'Kostenstelle', 'Menge']; // Angepasste Kopfzeilentexte
const costCenterOptions: string[] = [
  '4240', '4250', '4300', '4360', '4361', '4362', '4500', '4510', '4520', '4600',
  '4610', '4700', '4705', '4710', '4720', '4721', '4722', '4730', '4740', '4800',
  '4805', '4806', '4810', '4811', '4812', '4813', '4814', '4815', '4816', '4817',
  '4818', '4824', '4830', '4831', '4832', '4833', '4834', '4835', '4850', '4860',
  '4900', '4910', '4920', '4930', '4940', '4950', '4951', '4960'
];

const withdrawalOptions = ref([
  { name: 'Gutschrift auf Vereinsfliegerkonto', code: 'vf' },
  { name: 'Überweisung auf Bankkonto', code: 'transfer-bank' },
  { name: 'Überweisung an Rechnungssteller', code: 'transfer-biller' },
  { name: 'Lastschrift durch Rechnungssteller', code: 'directdebit-biller' }
]);

function createEmptyRow(): Row {
  return columns.reduce((acc: Row, column: string) => {
    acc[column] = column === 'amount' ? 0 : '';
    return acc;
  }, {});
}

const rows = ref<Row[]>([createEmptyRow()]);

const addRow = (): void => {
  rows.value.push(createEmptyRow());
};

const getColumnType = (column: string): string => {
  return column === 'amount' ? 'number' : 'text';
};

const getPlaceholder = (column: string): string => {
  const placeholders: { [key: string]: string } = {
    articleNumber: 'Artikelnummer',
    description: 'Beschreibung',
    usage: 'Verwendung',
    amount: '00,00 €',
  };
  return placeholders[column] || '';
};

const calculateTotal = computed((): string => {
  return rows.value.reduce((total: number, row: Row) => total + parseFloat(row.amount as string || '0'), 0).toFixed(2).replace('.', ',');
});

// Zugriff auf das input-Element und das div-Element für die Anzeige des Dateinamens
const fileInput = ref<HTMLInputElement | null>(null);

onMounted(() => {
  if (fileInput.value) {
    fileInput.value.addEventListener('change', handleFileSelect);
  }
});

function handleFileSelect(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files) {
    const newFiles = Array.from(input.files);
    formData.value.files.push(...newFiles); // Fügt neue Dateien zur Liste hinzu
    input.value = ''; // Setzt das input-Element zurück, damit dieselbe Datei erneut ausgewählt werden kann
  }
}

function removeFile(index: number) {
  formData.value.files.splice(index, 1); // Entfernt die Datei an der spezifizierten Position
}

function handleSignatureUpdate(signatureImage: string) {
  formData.value.signature = signatureImage; // Aktualisiere die Unterschrift in deinen Formulardaten
}

interface FormData {
  date: string;
  invoiceNumber: string,
  memberName: string;
  files: File[];
  total: string;
  withdrawalSelection: string;
  bankRecipient: string;
  iban: string;
  bic: string;
  approver: string;
  signature: string;
  remarks: string;
}

const formData = ref<FormData>({
  date: '',
  invoiceNumber: '',
  memberName: '',
  files: [],
  total: calculateTotal.value,
  withdrawalSelection: 'vf',
  bankRecipient: '',
  iban: '',
  bic: '',
  approver: '',
  signature: '',
  remarks: ''
});

watchEffect(() => {
  formData.value.total = calculateTotal.value;
});

async function submitData() {

  if (formData.value.files.length === 0) {
    console.error("Keine Datei ausgewählt");
    alert("Keine Datei ausgewählt");
    return;
  }

  // Erstellen eines FormData Objekts für den Upload
  const uploadData = new FormData();
  uploadData.append("date", formData.value.date);
  uploadData.append("invoiceNumber", formData.value.invoiceNumber);
  uploadData.append("memberName", formData.value.memberName);
  uploadData.append("total", formData.value.total);
  uploadData.append("withdrawalSelection", formData.value.withdrawalSelection);
  uploadData.append("signature", formData.value.signature);
  uploadData.append("remarks", formData.value.remarks);

  formData.value.files.forEach((file) => {
    uploadData.append('files', file);
  });

  try {
    const response = await axios.post('/api/v1/test_with_mail', uploadData);
    console.log(response.data);
  } catch (error) {
    console.error(error);
    alert(error);
  }
}
</script>

<template>
  <div class="main-wrapper">
    <div class="header">
      <img src="./assets/Logo.jpg" class="logo" alt="Logo">
      <h1 class="title">Ausgabenbeleg LSF-Wesel-Rheinhausen e.V.</h1>
    </div>

    <div class="general-information-container">

      <div class="row">
        <div class="col">
          <p>Datum: </p>
        </div>
        <div class="col">
          <Calendar v-model="formData.date" dateFormat="dd.mm.yy" variant="filled" showIcon showButtonBar />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p>Rechnungsnummer: </p>
        </div>
        <div class="col">
          <InputGroup>
            <InputText v-model="formData.invoiceNumber" placeholder="Rechnungsnummer" variant="filled" />
            <InputGroupAddon>
              <i class="pi pi-file"></i>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p>Name des Mitgliedes: </p>
        </div>
        <div class="col">
          <InputGroup>
            <InputText v-model="formData.memberName" placeholder="Name" variant="filled" />
            <InputGroupAddon>
              <i class="pi pi-user"></i>
            </InputGroupAddon>
          </InputGroup>
        </div>

      </div>
      <div class="row">
        <div class="col">
          <p>Rechnungsdateien: </p>
        </div>
        <div class="col">
          <label for="file" class="custum-file-upload">
            <div class="icon">
              <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                    fill=""></path>
                </g>
              </svg>
            </div>
            <div class="text">
              <span>Click to Upload</span>
            </div>
            <input id="file" type="file" ref="fileInput" multiple>
          </label>
          <div ref="fileNameDisplay" class="uploaded-lable"></div>
        </div>
      </div>
      <div class="row" v-if="formData.files.length !== 0">
        <div class="col">
          <p>Ausgewählte Dateien:</p>
        </div>
        <div class="col">
          <div class="uploaded-files-container">
            <p v-for="(file, index) in formData.files" :key="index" class="uploaded-file">
              {{ file.name }}
              <button @click="removeFile(index)">&#10060;</button>
            </p>
          </div>
        </div>
      </div>

    </div>


    <div class="bill-disclaimer-container">
      <em>Rechnungen müssen auf folgende Rechnungsadresse ausgestellt werden:</em>
      <p>LSF-Wesel-Rheinhausen</p>
      <p>Postfach 100240</p>
      <p>46462 Wesel</p>
    </div>


    <div class="article-list-wrapper">
      <div class="dialog-container">
        <fluent-button appearance="accent" @click="openDialog">Kostenstellen Übersicht</fluent-button>
        <DialogComponent ref="dialogRef">
        </DialogComponent>
      </div>
      <fluent-card class="article-list-card">
        <table>
          <thead>
            <tr>
              <th v-for="header in headers" :key="header">{{ header }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in rows" :key="index">
              <td v-for="column in columns" :key="column">
                <FVTextField v-if="column !== 'costCenter'" :type="getColumnType(column)" v-model="row[column]"
                  :placeholder="getPlaceholder(column)"></FVTextField>

                <Dropdown v-else v-model="row[column]" :options="costCenterOptions" placeholder="-- Auswählen --"
                  variant="filled" filter showClear :virtualScrollerOptions="{ itemSize: 38 }"
                  class="w-full md:w-14rem combo-option" />
                <!-- <FVComboBox v-else v-model="row[column]" autocomplete="both" placeholder="-- Auswählen --"
                  class="cost-select" position="below">
                  <fluent-option position="below" class="combo-option" v-for="option in costCenterOptions" :key="option"
                    :value="option">{{
            option
          }}</fluent-option>

                </FVComboBox> -->
              </td>
            </tr>
          </tbody>
        </table>
        <fluent-button appearance="accent" @click="addRow">&#xFF0B; Artikel hinzufügen</fluent-button>
        <div class="total-sum">Gesamtbetrag: {{ calculateTotal }} €</div>
      </fluent-card>
    </div>

    <!-- <div class="withdrawal-container">
      <fluent-card class="withdrawal-card">
        <fluent-select placeholder="-- Auswählen --" class="withdrawal-select" position="below">
          <fluent-option position="below" selected value="vf">Gutschrift auf Vereinsfliegerkonto</fluent-option>
          <fluent-option position="below" value="transfer-bank">Überweisung auf Bankkonto</fluent-option>
          <fluent-option position="below" value="transfer-biller">Überweisung an Rechnungssteller</fluent-option>
          <fluent-option position="below" value="directdebit-biller">Lastschrift durch Rechnungssteller</fluent-option>
        </fluent-select>

        <div class="bank-inputs" v-if="formData.withdrawalSelection.startsWith('transfer')">
          <fluent-divider></fluent-divider>
          <p v-if="formData.withdrawalSelection.includes('bank')">Für <strong>abweichendes</strong> Konto den Betrag auf
            folgendes
            Bankkonto überweisen:</p>
          <p v-if="formData.withdrawalSelection.includes('transfer-biller')">Kontodaten des Rechnungsstellers:</p>
          <fluent-text-field v-model="formData.bankRecipient" placeholder="Vorname Nachname">Name des
            Empfängers</fluent-text-field>
          <fluent-text-field v-model="formData.iban" placeholder="IBAN">IBAN</fluent-text-field>
          <fluent-text-field v-model="formData.bic" placeholder="BIC">BIC</fluent-text-field>
        </div>
      </fluent-card>
    </div> -->

    <Card>
      <template #title>Art der Begleichung</template>
      <template #content>
        <InputGroup style="max-width: 40%;">
          <Dropdown v-model="formData.withdrawalSelection" :options="withdrawalOptions" optionLabel="name"
            option-value="code" placeholder="Select" variant="filled" class="w-full md:w-14rem" />

          <InputGroupAddon>
            <i class="pi pi-euro"></i>
          </InputGroupAddon>
        </InputGroup>


        <div class="bank-inputs" v-if="formData.withdrawalSelection.startsWith('transfer')">
          <fluent-divider></fluent-divider>
          <p v-if="formData.withdrawalSelection.includes('bank')">Für ein <strong>abweichendes</strong> Konto den Betrag
            auf
            folgendes
            Bankkonto überweisen:</p>
          <p v-if="formData.withdrawalSelection.includes('transfer-biller')">Kontodaten des Rechnungsstellers:</p>
          <InputGroup>
            <InputText v-model="formData.bankRecipient" placeholder="Vorname Nachname" variant="filled" />
            <InputGroupAddon>
              <i class="pi pi-pencil"></i>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputText v-model="formData.iban" placeholder="IBAN" variant="filled" />
            <InputGroupAddon>
              <i class="pi pi-lock"></i>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputText v-model="formData.bic" placeholder="BIC" variant="filled" />
            <InputGroupAddon>
              <i class="pi pi-building"></i>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </template>
    </Card>

    <div class="approver-container">
      <fluent-card>

        <fluent-text-field v-model="formData.approver" placeholder="Name des Genehmigers">Ausgabe genehmigt
          durch:</fluent-text-field>
      </fluent-card>
    </div>

    <div class="signature-container">
      <p>Unterschrift des Vereinsmitgliedes:</p>
      <SignaturePad @updateSignature="handleSignatureUpdate" />
    </div>

    <div class="remarks-container">
      <fluent-text-area v-model="formData.remarks" class="remarks" resize="both">
        Bemerkungen:
      </fluent-text-area>
    </div>

    <fluent-button appearance="accent" @click="submitData">Submit</fluent-button>
  </div>
</template>

<style scoped>
@import './styles/file-upload.css';

@media (max-width: 600px) {

  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 1px solid #ccc;
    margin-bottom: 5px;
  }

  td {
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
    text-align: left;
    display: block;
    text-align: right;
  }

  td:before {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    content: attr(data-label);
    text-align: left;
  }
}

.header {
  background-color: white;
  border-bottom: 1px solid rgb(219, 219, 219);
  box-shadow: 3px 0 5px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 7vh;
  z-index: 100;
}

.logo {
  height: 100%;
}

.main-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.general-information-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}

.general-information-container .row {
  display: flex;
}

.general-information-container .col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 16rem;
}

.general-information-container p {
  font-size: 1.5em;
}

.uploaded-files-container {
  display: flex;
  flex-direction: column;
  gap: .3rem;
}

.uploaded-file {

  border-radius: .5rem;

  background-color: #036ec9;
  color: white;

  padding: .25rem .5rem;
  font-size: .9rem !important;
  width: fit-content;
  max-width: 70%;

  display: flex;
  align-items: center;
  justify-content: center;
}

.uploaded-file button {
  border: none;
  background-color: transparent;
  font-size: .9rem;
  padding: 0;
  margin-left: .5rem;
  cursor: pointer;
}


.bill-disclaimer-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.bill-disclaimer-container em {
  font-weight: bold;
}

.bill-disclaimer-container em,
.bill-disclaimer-container p {
  font-size: 1.4em;
}

.dialog-container {
  text-align: end;
  margin-bottom: .5rem;
}

.article-list-card {
  padding: 1rem;
  height: fit-content;
  contain: unset;
}

/* .article-list-wrapper {
  margin-top: .5rem;
} */

.article-list-wrapper th {
  font-size: 1.2rem;
}

.cost-select {
  /* Fixt Position da nicht in einer höhe mit Input-Feldern */
  margin-top: -.2rem;
}

.total-sum {
  text-align: right;
  font-size: 1.3rem;
  font-weight: bold;
}

.bank-inputs {
  display: flex;
  flex-direction: column;
  gap: .7rem;
  max-width: 40%;
}

.bank-inputs p {
  font-size: 1.3rem;
}

.approver-container {
  display: flex;
  justify-content: center;
}

.approver-container fluent-card {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.approver-container fluent-card fluent-text-field {
  width: fit-content;
}

.signature-container p {
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.remarks-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.remarks {
  width: 100%;
  height: auto;
}
</style>./components/Dialog.vue
