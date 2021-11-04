import 'vue-router'
declare module 'vue-router'{
  interface _RouteRecordBase {
    alwaysShow?: boolean
    noShowingChildren?: boolean
    hidden?: boolean
  }
}
