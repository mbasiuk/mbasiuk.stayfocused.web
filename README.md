# mbasiuk.stayfocused.web
web client of the mbasiuk.stayfocused solution.

## Installing package for debug

1)  if you are using `git` it's recommended to use add `mbasiuk.stayfocused` as git submodule. See [official git docs](https://git-scm.com/book/en/v2/Git-Tools-Submodules). Otherwise you might install it from your fork using [clone link](https://github.com/mbasiuk/mbasiuk.stayfocused.web.git), or directly clone or download it as [zip](https://github.com/mbasiuk/mbasiuk.stayfocused.web/archive/master.zip) if you just want quick test how it's working. To use submodule git submodule:

```cmd
git submodule add https://github.com/mbasiuk/mbasiuk.stayfocused.web.git
git add .gitmodules
git commit -m "added mbasiuk.stayfocused.web package. Use README.md for documentation." 
```

your .submodules file should contain:

```powershell
[submodule "mbasiuk.stayfocused.web"]
	path = mbasiuk.stayfocused.web
	url = https://github.com/mbasiuk/mbasiuk.stayfocused.web.git
```

2) add the `mbasiuk.stayfocused.web/index.js` to your html page like:

```html
...
</body>
<script async src="/mbasiuk.stayfocused.web/index.js"></script>
</html>
```

avoid using package managers like npm, nuget, bower, yarn etc for your managing this `mbasiuk.stayfocused.web` version unless it contain custom settings and which work with specific verion of library, because 
- it usually unreasonable resources consuming activity.
- as because `mbasiuk.stayfocused.web` should not correlate with any application functionality, it should it's own deployment process, useally much more simple then main application and without affecting lower environment, such as development, qa, etc.
- as because `mbasiuk.stayfocused.web` funtionality usually much more simple then main product functionality, it's recommended to use only one additional environment before production to configure and test it. Stay focused and open minded. Do not to waste your resources to the activity you can skip.

## Updating git submodule

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
