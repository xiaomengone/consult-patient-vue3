import { apiLike } from '@/services/consult'
import { Knowledge } from '@/type/consult'
import { TypeLikeCotegory} from '@/type/consult'
import { ref } from 'vue'

const useFollow = (type:TypeLikeCotegory='doc') => { 
    const loading=ref(false)
    const followWithInterest = async (item: Knowledge) => { 
    loading.value = true
    try {
        const res = await apiLike({ type, id: item?.id })
        item.likeFlag = item.likeFlag === 1 ? 0 : 1
    } finally { 
        loading.value = false
    }
    }
    return { loading , followWithInterest }
}

export { useFollow}