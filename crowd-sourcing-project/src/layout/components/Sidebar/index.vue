<template>
    <div>
        <logo />
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu
                :default-active="activeMenu"
                mode="vertical"
                :router="true"
            >
                <el-menu-item index="index">
                    <i class="el-icon-menu"></i>
                    <span slot="title">主页</span>
                </el-menu-item>
                <el-menu-item index="order-receive-hall">
                    <i class="el-icon-menu"></i>
                    <span slot="title">接单大厅</span>
                </el-menu-item>
                <el-menu-item index="my-order">
                    <i class="el-icon-menu"></i>
                    <span slot="title">我的订单</span>
                </el-menu-item>
                <el-menu-item index="personal-data">
                    <i class="el-icon-menu"></i>
                    <span slot="title">个人资料</span>
                </el-menu-item>
                <el-menu-item index="wallet">
                    <i class="el-icon-menu"></i>
                    <span slot="title">我的钱包</span>
                </el-menu-item>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import Logo from "./Logo";
// import SidebarItem from "./SidebarItem";
import { constantRoutes } from '@/router'

export default {
    components: {
        // SidebarItem,
        Logo
    },
    computed: {
        activeMenu() {
            const route = this.$route;
            const { meta, path } = route;
            // if set path, the sidebar will highlight the path you set
            if (meta.activeMenu) {
                return meta.activeMenu;
            }
            console.log('path', path)
            return path;
        },
        constantRoutes() {
            console.log('constantRoutes', constantRoutes)
            return constantRoutes;
        }
    }
};
</script>
