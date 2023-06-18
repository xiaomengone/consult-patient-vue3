import CpRadioBtn from '@/components/CpNavBar.vue'

declare module 'vue' { 
    interface GlobalComponents { 
        CpRadioBtn:typeof CpRadioBtn
    }
}