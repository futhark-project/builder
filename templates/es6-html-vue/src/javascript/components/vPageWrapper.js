import vMessage from './vMessage';
import greeting from "../modules/greeting";


export default {
    components: {
        vMessage,
    },
    data() {
        return {
          message: 'Hello, @futhark:build',
        };
    },
    created() {
      greeting("@futhark:build");
    },
};
