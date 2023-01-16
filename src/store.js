import { reactive } from 'vue'

export const store = reactive({
    url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien',
    urlCompleto: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?',
    urlSecond: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    cardsList: [],
    loading: true,
    archetypeList: []
})