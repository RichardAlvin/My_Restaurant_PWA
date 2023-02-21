import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import FastList from '../views/pages/fast-list';

const routes = {
  '/': Home,
  '/fast-list': FastList,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
