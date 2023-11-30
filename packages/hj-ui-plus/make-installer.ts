const INSTALLED_KEY = Symbol('hj-ui')

export const makeInstaller = (components: any[] = []) => {
  const install = (app: any) => {
    if (app[INSTALLED_KEY]) return

    app[INSTALLED_KEY] = true
    components.forEach((c) => app.use(c))
  }

  return {
    install
  }
}
