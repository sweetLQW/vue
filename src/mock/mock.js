import Mock from 'mockjs';
import util from '../libs/util'

Mock.mock(util.getUrl("aaaaa"), 'post', {
  orderState: "2",
  respCode:"0000",
  respDesc: null
});

export default Mock
