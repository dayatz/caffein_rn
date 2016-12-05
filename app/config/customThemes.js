import Color from 'color'

export default {
    tabBgColor: '#48A6E0',
    tabTextColor: '#fff',
    brandPrimary: '#48A6E0',
    get darkenHeader() {
        return Color(this.tabBgColor).darken(0.03).hexString()
    },
}
