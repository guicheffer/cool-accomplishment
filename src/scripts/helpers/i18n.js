const defaultLanguage = 'pt';
const msgs = {
  'pt': {
    'in': 'Em',
    'announcements': 'Anúncios',
    'newAnnouncement': 'Novo Anúncio',
    'unit-currencyBR': 'R$',
    'unit-squareMeters': 'M²',
    'label-uniqueId': 'ID Único',
    'label-area': 'Área',
    'label-bedrooms': 'Quartos',
    'label-bedroom': 'Quarto',
    'label-bathrooms': 'Banheiros',
    'label-bathroom': 'Banheiro',
    'label-filterBy': 'Filtrar por',
    'label-price': 'Valor',
    'label-priceMin': 'Mínimo',
    'label-priceMax': 'Máximo',
    'label-viewAnn': 'Visualizar anúncio',
    'msg-beWelcome': 'Olá, seja bem-vindo ao Spotippos! 💫',
    'msg-slogan': 'A ferramenta que te ajudará encontrar o imóvel dos seus sonhos',
    'msg-initialHelp': 'Por favor, selecione uma das opções da barra lateral esquerda.',
    'default-sorryNewAnn': '🏡 Spotippos diz:\n\n📢 Sorry! Essa feature é imaginária. ✋😞',
    'error-pleaseTryAgain': 'Por favor, tente novamente. 😐',
    'error-onlyNumbers': '❗️  Opa, este campo só aceita números!',
    'error-valMinLessMax': '❗️  Campo de valor máximo deve ser maior do que o mínimo!',
    'error-noAnnsFound': '💩 Nenhum resultado de anúncio encontrado.',
    'warning-databaseSearch': '📸  A pesquisa por ID procura primeiramente' +
                              ' nos anúncios pré-indexados;',
    'warning-pressEnter': '❗️ Pressione ⏎ <span>Enter</span> para pesquisar por ID no banco de dados.'
  }
};

export default function getText(keyMsg) {
  return msgs[defaultLanguage][keyMsg];
}
