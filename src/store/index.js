import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  state: {
    film: {
      top: [
        {
          id: '1',
          name: '黑子的篮球剧场版',
          short: '奇迹的世代最后一役',
          href: 'https://www.bilibili.com/bangumi/play/ep253908',
          cover:
            'https://i0.hdslb.com/bfs/bangumi/75c7528cbf3254dd20a4512376ced74733ab98ef.jpg@320w_428h.jpg'
        },
        {
          id: '2',
          name: '动物世界',
          short: '赌博默示录漫改',
          href: 'https://www.bilibili.com/bangumi/play/ep250897',
          cover:
            'https://i0.hdslb.com/bfs/bangumi/4500efa3b1699f33d814ff9e9c3553636ce69d3a.jpg@320w_428h.jpg'
        },
        {
          id: '3',
          name: '刀剑神域：序列之争',
          short: 'Link Start',
          href: 'https://www.bilibili.com/bangumi/play/ss12364',
          cover:
            'https://i0.hdslb.com/bfs/bangumi/51ebf0196dddcbdf1b0ef2296cd543c0f7092a7f.jpg@320w_428h.jpg'
        },
        {
          id: '4',
          name: '超时空同居',
          short: '穿越时空的扯面',
          href: 'https://www.bilibili.com/bangumi/play/ss25780',
          cover:
            'https://i0.hdslb.com/bfs/bangumi/b514a4a0bcf7853353ab9c87d7c9c5417ea67967.jpg@320w_428h.jpg'
        },
        {
          id: '5',
          name: '荒岛余生',
          short: '四年没上班的社畜',
          href: 'https://www.bilibili.com/bangumi/play/ss25865/',
          cover:
            'https://i0.hdslb.com/bfs/bangumi/3211c19bb4c136ae6459b94a89f7f3c6ae30116c.jpg@320w_428h.jpg'
        },
        {
          id: '6',
          name: '肆式青春',
          short: '故事总是发生在夏天',
          href: 'https://www.bilibili.com/bangumi/play/ep244830',
          cover:
            'https://i0.hdslb.com/bfs/bangumi/844ce360af60406feddeaf737b21649b99a8ffd0.jpg@320w_428h.jpg'
        },
        {
          id: '7',
          name: '海绵宝宝历险记',
          short: '我准备好了！',
          href: 'https://www.bilibili.com/bangumi/play/ep254507/',
          cover:
            'https://i0.hdslb.com/bfs/bangumi/7d9b4804226444f90913a9113a0f56f53056500d.jpg@320w_428h.jpg'
        },
        {
          id: '8',
          name: '变形金刚3',
          short: '月黑之时绝迹重生',
          href: 'https://www.bilibili.com/bangumi/play/ep253432',
          cover:
            'https://i0.hdslb.com/bfs/bangumi/775651e553d7aab57b63e2d879e8d00ecc4fdda1.jpg@320w_428h.jpg'
        },
        {
          id: '9',
          name: '太空救援',
          short: '战斗民族还原太空冒险',
          href: 'https://www.bilibili.com/bangumi/play/ss12623',
          cover:
            'https://i0.hdslb.com/bfs/bangumi/4177fa8d75020b95a2f9f0bdfbe3ae5056eda9c1.jpg@320w_428h.jpg'
        },
        {
          id: '10',
          name: '香草的天空',
          short: '风情万种的烧脑片',
          href: 'https://www.bilibili.com/bangumi/play/ss26007',
          cover:
            'https://i0.hdslb.com/bfs/bangumi/1052fb4565350f67f0a7146a2c9316bae96a548f.jpg@320w_428h.jpg'
        }
      ]
    }
  },
  mutations: {},
  actions: {}
})
