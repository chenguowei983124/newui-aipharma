# newui-aipharma


# | Attribute        | Type                | Default              | Description      |
# | :---             | :---:               | :---:                | :---             |
# |  message         | String              | --                   |  Message text/html (required)   |
# |  type            | String              | `success`            |  One of `success`, `info`, `warning`, `error`, # `default`  |
# |  position        | String              | `bottom-right`       |  One of `top`, `bottom`, `top-right`, # `bottom-right`,`top-left`, `bottom-left`  |
# |  duration        | Number              | `3000`               |  Visibility duration in milliseconds, set to `0` to keep toast visible    |
# |  dismissible     | Boolean             | `true`               |  Allow user dismiss by clicking    |
# |  onClick         | Function            | --                   |  Do something when user clicks    |
# |  onDismiss       | Function            | --                   |  Do something after toast gets dismissed    |
# |  queue           | Boolean             | `false`              |  Wait for existing to dismiss before showing new     |
# |  pauseOnHover    | Boolean             | `true`               |  Pause the timer when mouse on over a toast    |
