<template>
    <div v-if="isVisible" class="dialog" @click.self="closeDialog">
        <div class="dialog-content">
            <span class="close-button" @click="closeDialog">&times;</span>
            <table>
                <tr>
                    <th>Kostenstellennummer</th>
                    <th>Bezeichnung</th>
                </tr>
                <tr>
                    <td>4240</td>
                    <td>Strom/Heizung/Wasser</td>
                </tr>
                <tr>
                    <td>4250</td>
                    <td>Abfallbeseitigung</td>
                </tr>
                <tr>
                    <td>4300</td>
                    <td>Treibstoff Einkauf</td>
                </tr>
                <tr>
                    <td>4360</td>
                    <td>Versicherung allgemein</td>
                </tr>
                <tr>
                    <td>4361</td>
                    <td>Versicherung Segelflug/Anhänger</td>
                </tr>
                <tr>
                    <td>4362</td>
                    <td>Versicherung Motorflug</td>
                </tr>
                <tr>
                    <td>4500</td>
                    <td>Flugleiterdienst Aufwände</td>
                </tr>
                <tr>
                    <td>4510</td>
                    <td>Wartung / Reparatur Fluggeräte / Werkstatt</td>
                </tr>
                <tr>
                    <td>4520</td>
                    <td>Lehrgangsgebühren</td>
                </tr>
                <tr>
                    <td>4600</td>
                    <td>Verbandsgebühren</td>
                </tr>
                <tr>
                    <td>4610</td>
                    <td>Werbeaufwendungen</td>
                </tr>
                <tr>
                    <td>4700</td>
                    <td>Aufwendungen Landeplatz</td>
                </tr>
                <tr>
                    <td>4705</td>
                    <td>Aufwendungen Hallenneubau</td>
                </tr>
                <tr>
                    <td>4710</td>
                    <td>Aufwendungen Luftaufsicht</td>
                </tr>
                <tr>
                    <td>4720</td>
                    <td>Aufwendungen Brückenbögen</td>
                </tr>
                <tr>
                    <td>4721</td>
                    <td>Aufwendungen Jugendgruppe</td>
                </tr>
                <tr>
                    <td>4722</td>
                    <td>Aufwendungen TanteJu</td>
                </tr>
                <tr>
                    <td>4730</td>
                    <td>Aufwendungen Segelflugbetrieb</td>
                </tr>
                <tr>
                    <td>4740</td>
                    <td>Aufwendungen Gaststarts (anteilig)</td>
                </tr>
                <tr>
                    <td>4800</td>
                    <td>Instandhaltung Flugzeuge (alle)</td>
                </tr>
                <tr>
                    <td>4805</td>
                    <td>Instandhaltung Winde rot</td>
                </tr>
                <tr>
                    <td>4806</td>
                    <td>Instandhaltung Winde Silber</td>
                </tr>
                <tr>
                    <td>4810</td>
                    <td>Instandhaltung Segelflugzeuge</td>
                </tr>
                <tr>
                    <td>4811</td>
                    <td>Instandhaltung D-6684 (ASK21)</td>
                </tr>
                <tr>
                    <td>4812</td>
                    <td>Instandhaltung D-6654 (ASK21)</td>
                </tr>
                <tr>
                    <td>4813</td>
                    <td>Instandhaltung D-6489 (ASK13)</td>
                </tr>
                <tr>
                    <td>4814</td>
                    <td>Instandhaltung D-7044 (LS4b)</td>
                </tr>
                <tr>
                    <td>4815</td>
                    <td>Instandhaltung D-3437 (LS4)</td>
                </tr>
                <tr>
                    <td>4816</td>
                    <td>Instandhaltung D-8325 (ASK23)</td>
                </tr>
                <tr>
                    <td>4817</td>
                    <td>Instandhaltung D-KOLA</td>
                </tr>
                <tr>
                    <td>4818</td>
                    <td>Instandhaltung D-9255 (K8b)</td>
                </tr>
                <tr>
                    <td>4824</td>
                    <td>Abschreibungen</td>
                </tr>
                <tr>
                    <td>4830</td>
                    <td>Instandhaltung Motorflug (MoSe+UL)</td>
                </tr>
                <tr>
                    <td>4831</td>
                    <td>Instandhaltung Motorsegler</td>
                </tr>
                <tr>
                    <td>4832</td>
                    <td>Instandhaltung D-KBUL</td>
                </tr>
                <tr>
                    <td>4833</td>
                    <td>Instandhaltung D-KTIA</td>
                </tr>
                <tr>
                    <td>4834</td>
                    <td>Instandhaltung D-KBUC</td>
                </tr>
                <tr>
                    <td>4835</td>
                    <td>Instandhaltung Ultraleichtflugzeug D-MAXY</td>
                </tr>
                <tr>
                    <td>4850</td>
                    <td>Instandhaltung Lepos</td>
                </tr>
                <tr>
                    <td>4860</td>
                    <td>Instandhaltung Fallschirme</td>
                </tr>
                <tr>
                    <td>4900</td>
                    <td>Allgemeine Aufwendungen</td>
                </tr>
                <tr>
                    <td>4910</td>
                    <td>Außergewöhnliche Aufwendungen</td>
                </tr>
                <tr>
                    <td>4920</td>
                    <td>Getränkeeinkäufe</td>
                </tr>
                <tr>
                    <td>4930</td>
                    <td>Verwaltung (Internet/Telefon/Software)</td>
                </tr>
                <tr>
                    <td>4940</td>
                    <td>Shopeinkauf</td>
                </tr>
                <tr>
                    <td>4950</td>
                    <td>Aufwendungen eigenes Fliegerlager</td>
                </tr>
                <tr>
                    <td>4951</td>
                    <td>Aufwendungen Osterfeuer</td>
                </tr>
                <tr>
                    <td>4960</td>
                    <td>Rechts- und Beratungskosten</td>
                </tr>
            </table>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isVisible = ref(false);

function openDialog() {
    isVisible.value = true;
}

function closeDialog() {
    isVisible.value = false;
}

// Exportiere die Funktionen, um sie von außen zugänglich zu machen
defineExpose({ openDialog, closeDialog });
</script>

<style scoped>
.dialog {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
}

.dialog-content {
    max-height: 80vh;
    overflow-y: auto;
    background-color: #fff;
    padding: 1.25rem;
    border-radius: 0.3125rem;
    box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
    position: relative;
}

.close-button {
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
    cursor: pointer;
    font-size: 2rem;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 0.5rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
    font-size: 1.2rem;
}
</style>