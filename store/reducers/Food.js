import { GET_FOOD, SET_GROUP } from '../actions/types'
export const getImage = name => {
    switch (name) {
        case 'pizza':
            return require('../../images/pizza.png')
        case 'sushi':
            return require('../../images/sushi.png')
        default:
            return require('../../images/sushi.png')
    }
}
const initialState = {
    address: 'Опалихинская, 46',
    groups: ['Пицца', 'Ролы', 'Супы', 'Салаты', 'Закуски'],
    group: null,
    items: [
        {
            image: 'pizza',
            rating: '4',
            name: 'С копчёной курицей',
            desc: 'Копченая куриная грудка, помидоры и соленые огурцы- новое видение пиццы от наших шеф-поваров',
            addons: ['Острое масло к пицце 20гр', 'Больше кетчупа'],
            price: '630 ₽',
            mass: '450 г',
            tag: 'Пицца'
        },
        {
            id: 2,
            image: 'sushi',
            rating: '4.8',
            name: 'Суши',
            desc: 'Копченая куриная грудка, помидоры и соленые огурцы- новое видение пиццы от наших шеф-поваров',
            addons: ['Острое масло к пицце 20гр', 'Больше кетчупа'],
            price: '630 ₽',
            mass: '450 г',
            tag: 'Ролы'
        },
        {

            image: 'sushi',
            rating: '4.8',
            name: 'Суши123',
            desc: 'Копченая куриная грудка, помидоры и соленые огурцы- новое видение пиццы от наших шеф-поваров',
            addons: ['Острое масло к пицце 20гр', 'Больше кетчупа'],
            price: '630 ₽',
            mass: '450 г',
            tag: 'Ролы'
        },
        {
            image: 'pizza',
            rating: '3',
            name: 'Сырная',
            desc: 'Копченая куриная грудка, помидоры и соленые огурцы- новое видение пиццы от наших шеф-поваров',
            addons: ['Острое масло к пицце 20гр', 'Больше кетчупа'],
            price: '630 ₽',
            mass: '450 г',
            tag: 'Пицца'
        },
        {
            image: 'sushi',
            rating: '4.8',
            name: 'Гренки',
            desc: 'Копченая куриная грудка, помидоры и соленые огурцы- новое видение пиццы от наших шеф-поваров',
            addons: ['Острое масло к пицце 20гр', 'Больше кетчупа'],
            price: '630 ₽',
            mass: '450 г',
            tag: 'Закуски'
        },
        {
            image: 'pizza',
            rating: '3',
            name: 'Салат крабовый',
            desc: 'Копченая куриная грудка, помидоры и соленые огурцы- новое видение пиццы от наших шеф-поваров',
            addons: ['Острое масло к пицце 20гр', 'Больше кетчупа'],
            price: '630 ₽',
            mass: '450 г',
            tag: 'Салаты'
        },
        {
            image: 'sushi',
            rating: '4.8',
            name: 'Суп1',
            desc: 'Копченая куриная грудка, помидоры и соленые огурцы- новое видение пиццы от наших шеф-поваров',
            addons: ['Острое масло к пицце 20гр', 'Больше кетчупа'],
            price: '630 ₽',
            mass: '450 г',
            tag: 'Суп'
        },
        {
            image: 'pizza',
            rating: '3',
            name: 'Суп',
            desc: 'Копченая куриная грудка, помидоры и соленые огурцы- новое видение пиццы от наших шеф-поваров',
            addons: ['Острое масло к пицце 20гр', 'Больше кетчупа'],
            price: '630 ₽',
            mass: '450 г',
            tag: 'Супы'
        },
    ].map((v,i)=>({...v,id: `f-${i+1}`}))
};

const Food = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_GROUP':
            return { ...state, group: action.payload }
        default:
            return state;
    }
};

export default Food;