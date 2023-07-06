import { Notification, BreadcrumbItem, Breadcrumb, Upload, Tooltip, Input, FormItem, Form, MessageBox, Drawer, Row, Col, Container, Header, Aside, Main, Button, Menu, Submenu, MenuItemGroup, MenuItem, Card, Message } from 'element-ui';
import '@/theme/index.css';
export default {
    // 全局声明
    install(Vue) {
        Vue.use(BreadcrumbItem)
        Vue.use(Breadcrumb)
        Vue.use(Upload)
        Vue.use(Tooltip)
        Vue.use(Input)
        Vue.use(FormItem)
        Vue.use(Form)
        Vue.use(Drawer)
        Vue.use(Row)
        Vue.use(Col)
        Vue.use(Container)
        Vue.use(Header)
        Vue.use(Aside)
        Vue.use(Main)
        Vue.use(Button)
        Vue.use(Menu)
        Vue.use(Submenu)
        Vue.use(MenuItemGroup)
        Vue.use(MenuItem)
        Vue.use(Card)

        Vue.prototype.$message = Message;
        Vue.prototype.$confirm = MessageBox.confirm;
        Vue.prototype.$notify = Notification;

        Vue.config.productionTip = false
    }
}