# mbasiuk.stayfocused.web
web client of the mbasiuk.stayfocused solution.

## Installing package for debug

1)  if you are using `git` it recommended to use add `mbasiuk.stayfocused` as git submodule. See [official git docs](https://git-scm.com/book/en/v2/Git-Tools-Submodules). Otherwise you might install it manually.

```cmd
git submodule add https://github.com/mbasiuk/mbasiuk.stayfocused.web.git
```

2) add the [index.js] file reference from the submodule to your html page.
3) check the status

```html
...
</body>
<script async src="/mbasiuk.stayfocused.web/index.js"></script>
</html>
```

## Updating package

### powershell

```powershell
pushd .\mbasiuk.stayfocused.web\;git pull -p;popd;git add mbasiuk.stayfocused.web; git commit -m "updated stayfocused.web lib";git push;
```

## Installing production version
1) Pack appropriate tested version to cdn
2) Choose the correct license type. For a commertial license please contact mykhailo.basiuk+sale@gmail.com
3) update your version to the cdn.
```html
...
</body>
<script async src="/path-to-cdn-mbasiuk.stayfocused.js"></script>
</html>
```

## Troubleshooting

### Error

>WebSocket connection to 'wss://237.191.157.243/' failed: Error in connection establishment: net::ERR_CONNECTION_REFUSED

 `mbasiuk.stayfocused.server` is not started. start the server.
