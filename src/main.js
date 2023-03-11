import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";
import router from './router';
import store from './store';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faWallet, faCircleDollarToSlot, faChartLine, faUserTie, faCreditCard, faSackDollar, faUser, faIdBadge, faPowerOff, faPlus, faClose, faCoins, faMoneyBill, faPiggyBank, faBuildingColumns, faVault, faPen, faTimes, faHome, faGear } from '@fortawesome/free-solid-svg-icons';

library.add(faWallet, faCircleDollarToSlot, faChartLine, faUserTie, faCreditCard, faSackDollar, faUser, faIdBadge, faPowerOff, faPlus, faClose, faCoins, faMoneyBill, faPiggyBank, faBuildingColumns, faVault, faPen, faTimes, faHome, faGear);

createApp(App)
.use(router)
.use(store)
.component('font-awesome-icon', FontAwesomeIcon)
.mount("#app");