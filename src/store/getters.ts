const getters:any = {
  sidebar: (state: { app: { sidebar: any } }) => state.app.sidebar,
  device: (state: { app: { device: any } }) => state.app.device,
  token: (state: { user: { token: any } }) => state.user.token,
  avatar: (state: { user: { avatar: any } }) => state.user.avatar,
  name: (state: { user: { name: any } }) => state.user.name
}
export default getters
