import { ref } from 'vue'

const getProducts = () => {
    const state = ref ([
        {
            id: 1,
            title: 'Kanteen T-shirt',
            image:new URL('../assets/img/tshirt.png', import.meta.url),
            category: 'T-shirt',
            detail: 'Our merch',
            size: 'You can choose your size here'
        },
        {
            id: 2,
            title: 'Kanteen Hoodie',
            image:new URL('../assets/img/tshirt.png', import.meta.url),
            category: 'Hoodie',
            detail: 'Our merch',
            size: 'You can choose your size here'
        },
        {
            id: 3,
            title: 'Kanteen Socks',
            image:new URL('../assets/img/tshirt.png', import.meta.url),
            category: 'Socks',
            detail: 'Our merch',
            size: 'You can choose your size here'
        },
        {
            id: 4,
            title: 'Kanteen Water Bottle',
            image:new URL('../assets/img/tshirt.png', import.meta.url),
            category: 'Accesories',
            detail: 'Our merch',
            size: 'You can choose your size here'
        },
        {
            id: 5,
            title: 'Kanteen Bag',
            image:new URL('../assets/img/tshirt.png', import.meta.url),
            category: 'Bag',
            detail: 'Our merch',
            size: 'You can choose your size here'
        },
        {
            id: 6,
            title: 'Kanteen T-shirt',
            image:new URL('../assets/img/tshirt.png', import.meta.url),
            category: 'T-shirt',
            detail: 'Our merch',
            size: 'You can choose your size here'
        },
    ])
    return {
        state
    }
}

export default getProducts