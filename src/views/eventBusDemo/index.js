import { eventbus, TYPE } from './eventbus';
import pageChat from './pages/pageChat';
import pageMsg from './pages/pageMsg';
import pageSession from './pages/pageSession';

export default {
  components: {
    pageChat,
    pageMsg,
    pageSession,
  },
  data() {
    return {
      active: 'pageChat',
      typeList: Object(TYPE),
      menu: [
        {
          text: 'Chat',
          is: 'pageChat',
        },
        {
          text: 'Msg',
          is: 'pageMsg',
        },
        {
          text: 'session',
          is: 'pageSession',
        },
      ],
    };
  },
  mounted() {

  }, 
  methods: {
    click(type) {
      // send a msg
      eventbus.$emit(type, {
        type,
        msg: '发送一条信息，type：' + type,
      })
    }
  }
}
