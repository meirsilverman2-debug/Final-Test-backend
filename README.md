# Final Test:
---
## Alert sytstem:

#### That gets and handels alerts in real time to protect Israel with the power of CRUD we are managing each and evry alert (create, read, update, delete)
---
## How to run the server:
```
npm start
```
---
## Five alert endpoints of our system:

* GET /api/alerts

* GET /api/alerts/:id

* POST /api/alerts

* DELETE /api/alerts/:id

* PUT /api/alerts/:id
---
## Five auth endpoints of our system:

* GET /api/auth/users

* POST /api/auth/login

* GET /api/alerts/me

* POST /api/auth/register

* DELETE /api/auth/users/:id
---

## DB:
---
#### I chose mongodb because as a collection type database it is more convinyent if the req body has a field that its value is an arry or object insted of many tabels to in othet db and also it is much more flexable so not evry alert has to be with all of the same fileds.
---
# Status code:
---
* for the post route if is successed it returns status code 201 which means somthing as been created

* for a user which has no token and he trys someting else then register meaning the system does not authnticate him he will receive status code 401 which means "who are you again??"

* for a user that has a token meaning the system knows him but he trys to do somthing that ha does not have the authority to for example the user role is not "Admin"  he will receive the status code 403 which means we know who you are but you are not allow to do it 

* for a user who want to get a spesific alert or user etc.. and they are not written in the system database the client slash user will reciev the 404 status code which means "Not found"

---
## Soldier Name:
---
* Meir Silverman
---
## System File Structure:

```
C:.
├───backend
│   ├───controllers
│   ├───DAL
│   ├───db
│   ├───middelware
│   ├───node_modules
│   │   ├───.bin
│   │   ├───@mongodb-js
│   │   │   └───saslprep
│   │   │       └───dist
│   │   ├───@types
│   │   │   ├───webidl-conversions
│   │   │   └───whatwg-url
│   │   │       └───lib
│   │   ├───accepts
│   │   ├───bcrypt
│   │   │   ├───.github
│   │   │   │   └───workflows
│   │   │   ├───examples
│   │   │   ├───prebuilds
│   │   │   │   ├───darwin-arm64
│   │   │   │   ├───darwin-x64
│   │   │   │   ├───linux-arm
│   │   │   │   ├───linux-arm64
│   │   │   │   ├───linux-x64
│   │   │   │   ├───win32-arm64
│   │   │   │   └───win32-x64
│   │   │   ├───src
│   │   │   └───test
│   │   ├───body-parser
│   │   │   ├───lib
│   │   │   │   └───types
│   │   │   └───node_modules
│   │   │       └───content-type
│   │   │           └───dist
│   │   ├───bson
│   │   │   ├───etc
│   │   │   ├───lib
│   │   │   └───src
│   │   │       ├───parser
│   │   │       │   └───on_demand
│   │   │       └───utils
│   │   ├───buffer-equal-constant-time
│   │   ├───bytes
│   │   ├───call-bind-apply-helpers
│   │   │   ├───.github
│   │   │   └───test
│   │   ├───call-bound
│   │   │   ├───.github
│   │   │   └───test
│   │   ├───content-disposition
│   │   ├───content-type
│   │   ├───cookie
│   │   ├───cookie-signature
│   │   ├───cors
│   │   │   └───lib
│   │   ├───debug
│   │   │   └───src
│   │   ├───depd
│   │   │   └───lib
│   │   │       └───browser
│   │   ├───dotenv
│   │   │   └───dist
│   │   ├───dunder-proto
│   │   │   ├───.github
│   │   │   └───test
│   │   ├───ecdsa-sig-formatter
│   │   │   └───src
│   │   ├───ee-first
│   │   ├───encodeurl
│   │   ├───es-define-property
│   │   │   ├───.github
│   │   │   └───test
│   │   ├───es-errors
│   │   │   ├───.github
│   │   │   └───test
│   │   ├───es-object-atoms
│   │   │   ├───.github
│   │   │   └───test
│   │   ├───escape-html
│   │   ├───etag
│   │   ├───express
│   │   │   └───lib
│   │   ├───finalhandler
│   │   ├───forwarded
│   │   ├───fresh
│   │   ├───function-bind
│   │   │   ├───.github
│   │   │   └───test
│   │   ├───get-intrinsic
│   │   │   ├───.github
│   │   │   └───test
│   │   ├───get-proto
│   │   │   ├───.github
│   │   │   └───test
│   │   ├───gopd
│   │   │   ├───.github
│   │   │   └───test
│   │   ├───has-symbols
│   │   │   ├───.github
│   │   │   └───test
│   │   │       └───shams
│   │   ├───hasown
│   │   │   └───.github
│   │   ├───helmet
│   │   ├───http-errors
│   │   ├───iconv-lite
│   │   │   ├───encodings
│   │   │   │   └───tables
│   │   │   ├───lib
│   │   │   │   └───helpers
│   │   │   └───types
│   │   ├───inherits
│   │   ├───ipaddr.js
│   │   │   └───lib
│   │   ├───is-promise
│   │   ├───jsonwebtoken
│   │   │   └───lib
│   │   ├───jwa
│   │   ├───jws
│   │   │   └───lib
│   │   ├───lodash.includes
│   │   ├───lodash.isboolean
│   │   ├───lodash.isinteger
│   │   ├───lodash.isnumber
│   │   ├───lodash.isplainobject
│   │   ├───lodash.isstring
│   │   ├───lodash.once
│   │   ├───math-intrinsics
│   │   │   ├───.github
│   │   │   ├───constants
│   │   │   └───test
│   │   ├───media-typer
│   │   ├───memory-pager
│   │   ├───merge-descriptors
│   │   ├───mime-db
│   │   ├───mime-types
│   │   ├───mongodb
│   │   │   ├───etc
│   │   │   ├───lib
│   │   │   │   ├───bulk
│   │   │   │   ├───client-side-encryption
│   │   │   │   │   └───providers
│   │   │   │   ├───cmap
│   │   │   │   │   ├───auth
│   │   │   │   │   │   └───mongodb_oidc
│   │   │   │   │   ├───handshake
│   │   │   │   │   └───wire_protocol
│   │   │   │   │       └───on_demand
│   │   │   │   ├───cursor
│   │   │   │   ├───gridfs
│   │   │   │   ├───operations
│   │   │   │   │   ├───client_bulk_write
│   │   │   │   │   └───search_indexes
│   │   │   │   └───sdam
│   │   │   └───src
│   │   │       ├───bulk
│   │   │       ├───client-side-encryption
│   │   │       │   └───providers
│   │   │       ├───cmap
│   │   │       │   ├───auth
│   │   │       │   │   └───mongodb_oidc
│   │   │       │   ├───handshake
│   │   │       │   └───wire_protocol
│   │   │       │       └───on_demand
│   │   │       ├───cursor
│   │   │       ├───gridfs
│   │   │       ├───operations
│   │   │       │   ├───client_bulk_write
│   │   │       │   └───search_indexes
│   │   │       └───sdam
│   │   ├───mongodb-connection-string-url
│   │   │   └───lib
│   │   ├───ms
│   │   ├───negotiator
│   │   │   ├───lib
│   │   │   └───node_modules
│   │   │       └───content-type
│   │   │           └───dist
│   │   ├───node-addon-api
│   │   │   └───tools
│   │   ├───node-gyp-build
│   │   ├───object-assign
│   │   ├───object-inspect
│   │   │   ├───.github
│   │   │   ├───example
│   │   │   └───test
│   │   │       └───browser
│   │   ├───on-finished
│   │   ├───once
│   │   ├───parseurl
│   │   ├───path-to-regexp
│   │   │   └───dist
│   │   ├───proxy-addr
│   │   ├───punycode
│   │   ├───qs
│   │   │   ├───.github
│   │   │   ├───dist
│   │   │   ├───lib
│   │   │   └───test
│   │   ├───range-parser
│   │   ├───raw-body
│   │   ├───router
│   │   │   └───lib
│   │   ├───safe-buffer
│   │   ├───safer-buffer
│   │   ├───semver
│   │   │   ├───bin
│   │   │   ├───classes
│   │   │   ├───functions
│   │   │   ├───internal
│   │   │   └───ranges
│   │   ├───send
│   │   ├───serve-static
│   │   ├───setprototypeof
│   │   │   └───test
│   │   ├───side-channel
│   │   │   ├───.github
│   │   │   └───test
│   │   ├───side-channel-list
│   │   │   ├───.github
│   │   │   └───test
│   │   ├───side-channel-map
│   │   │   ├───.github
│   │   │   └───test
│   │   ├───side-channel-weakmap
│   │   │   ├───.github
│   │   │   └───test
│   │   ├───sparse-bitfield
│   │   ├───statuses
│   │   ├───toidentifier
│   │   ├───tr46
│   │   │   └───lib
│   │   ├───type-is
│   │   │   └───node_modules
│   │   │       └───content-type
│   │   │           └───dist
│   │   ├───unpipe
│   │   ├───vary
│   │   ├───webidl-conversions
│   │   │   └───lib
│   │   ├───whatwg-url
│   │   │   └───lib
│   │   ├───wrappy
│   │   └───zod
│   │       ├───locales
│   │       ├───mini
│   │       ├───src
│   │       │   ├───locales
│   │       │   ├───mini
│   │       │   ├───v3
│   │       │   │   ├───benchmarks
│   │       │   │   ├───helpers
│   │       │   │   ├───locales
│   │       │   │   └───tests
│   │       │   ├───v4
│   │       │   │   ├───classic
│   │       │   │   │   └───tests
│   │       │   │   ├───core
│   │       │   │   │   └───tests
│   │       │   │   │       └───locales
│   │       │   │   ├───locales
│   │       │   │   └───mini
│   │       │   │       └───tests
│   │       │   └───v4-mini
│   │       ├───v3
│   │       │   ├───helpers
│   │       │   └───locales
│   │       ├───v4
│   │       │   ├───classic
│   │       │   ├───core
│   │       │   ├───locales
│   │       │   └───mini
│   │       └───v4-mini
│   ├───routes
│   ├───service
│   ├───utils
│   └───validation
└───frontend
    └───alert-System
        ├───node_modules
        │   ├───.bin
        │   ├───.vite
        │   │   └───deps
        │   ├───.vite-temp
        │   ├───@babel
        │   │   ├───code-frame
        │   │   │   └───lib
        │   │   ├───compat-data
        │   │   │   └───data
        │   │   ├───core
        │   │   │   ├───lib
        │   │   │   │   ├───config
        │   │   │   │   │   ├───files
        │   │   │   │   │   ├───helpers
        │   │   │   │   │   └───validation
        │   │   │   │   ├───errors
        │   │   │   │   ├───gensync-utils
        │   │   │   │   ├───parser
        │   │   │   │   │   └───util
        │   │   │   │   ├───tools
        │   │   │   │   ├───transformation
        │   │   │   │   │   ├───file
        │   │   │   │   │   └───util
        │   │   │   │   └───vendor
        │   │   │   └───src
        │   │   │       ├───config
        │   │   │       │   └───files
        │   │   │       └───transformation
        │   │   ├───generator
        │   │   │   └───lib
        │   │   │       ├───generators
        │   │   │       └───node
        │   │   ├───helper-compilation-targets
        │   │   │   └───lib
        │   │   ├───helper-globals
        │   │   │   └───data
        │   │   ├───helper-module-imports
        │   │   │   └───lib
        │   │   ├───helper-module-transforms
        │   │   │   └───lib
        │   │   ├───helper-string-parser
        │   │   │   └───lib
        │   │   ├───helper-validator-identifier
        │   │   │   └───lib
        │   │   ├───helper-validator-option
        │   │   │   └───lib
        │   │   ├───helpers
        │   │   │   └───lib
        │   │   │       └───helpers
        │   │   ├───parser
        │   │   │   ├───bin
        │   │   │   ├───lib
        │   │   │   └───typings
        │   │   ├───template
        │   │   │   └───lib
        │   │   ├───traverse
        │   │   │   └───lib
        │   │   │       ├───path
        │   │   │       │   ├───inference
        │   │   │       │   └───lib
        │   │   │       └───scope
        │   │   │           └───lib
        │   │   └───types
        │   │       └───lib
        │   │           ├───asserts
        │   │           │   └───generated
        │   │           ├───ast-types
        │   │           │   └───generated
        │   │           ├───builders
        │   │           │   ├───flow
        │   │           │   ├───generated
        │   │           │   ├───react
        │   │           │   └───typescript
        │   │           ├───clone
        │   │           ├───comments
        │   │           ├───constants
        │   │           │   └───generated
        │   │           ├───converters
        │   │           ├───definitions
        │   │           ├───modifications
        │   │           │   ├───flow
        │   │           │   └───typescript
        │   │           ├───retrievers
        │   │           ├───traverse
        │   │           ├───utils
        │   │           │   └───react
        │   │           └───validators
        │   │               ├───generated
        │   │               └───react
        │   ├───@cacheable
        │   │   ├───memory
        │   │   │   └───dist
        │   │   └───utils
        │   │       └───dist
        │   ├───@eslint
        │   │   ├───config-array
        │   │   │   └───dist
        │   │   │       ├───cjs
        │   │   │       │   └───std__path
        │   │   │       └───esm
        │   │   │           └───std__path
        │   │   ├───config-helpers
        │   │   │   └───dist
        │   │   │       ├───cjs
        │   │   │       └───esm
        │   │   ├───core
        │   │   │   └───dist
        │   │   │       ├───cjs
        │   │   │       └───esm
        │   │   ├───js
        │   │   │   ├───src
        │   │   │   │   └───configs
        │   │   │   └───types
        │   │   ├───object-schema
        │   │   │   └───dist
        │   │   │       ├───cjs
        │   │   │       └───esm
        │   │   └───plugin-kit
        │   │       └───dist
        │   │           ├───cjs
        │   │           └───esm
        │   ├───@eslint-community
        │   │   ├───eslint-utils
        │   │   │   └───node_modules
        │   │   │       └───eslint-visitor-keys
        │   │   │           ├───dist
        │   │   │           └───lib
        │   │   └───regexpp
        │   ├───@humanfs
        │   │   ├───core
        │   │   │   ├───dist
        │   │   │   └───src
        │   │   ├───node
        │   │   │   ├───dist
        │   │   │   └───src
        │   │   └───types
        │   │       └───src
        │   ├───@humanwhocodes
        │   │   ├───module-importer
        │   │   │   ├───dist
        │   │   │   └───src
        │   │   └───retry
        │   │       └───dist
        │   ├───@jridgewell
        │   │   ├───gen-mapping
        │   │   │   ├───dist
        │   │   │   │   └───types
        │   │   │   ├───src
        │   │   │   └───types
        │   │   ├───remapping
        │   │   │   ├───dist
        │   │   │   ├───src
        │   │   │   └───types
        │   │   ├───resolve-uri
        │   │   │   └───dist
        │   │   │       └───types
        │   │   ├───sourcemap-codec
        │   │   │   ├───dist
        │   │   │   ├───src
        │   │   │   └───types
        │   │   └───trace-mapping
        │   │       ├───dist
        │   │       ├───src
        │   │       └───types
        │   ├───@keyv
        │   │   ├───bigmap
        │   │   │   └───dist
        │   │   └───serialize
        │   │       └───dist
        │   ├───@oxc-project
        │   │   └───types
        │   ├───@react-leaflet
        │   │   └───core
        │   │       └───lib
        │   ├───@remix-run
        │   │   └───route-pattern
        │   │       ├───dist
        │   │       │   └───lib
        │   │       │       ├───match
        │   │       │       ├───route-pattern
        │   │       │       └───types
        │   │       └───src
        │   │           └───lib
        │   │               ├───match
        │   │               ├───route-pattern
        │   │               └───types
        │   ├───@rolldown
        │   │   ├───binding-win32-x64-msvc
        │   │   └───pluginutils
        │   │       └───dist
        │   │           └───filter
        │   ├───@types
        │   │   ├───esrecurse
        │   │   ├───estree
        │   │   ├───geojson
        │   │   ├───json-schema
        │   │   ├───leaflet
        │   │   ├───node
        │   │   │   ├───assert
        │   │   │   ├───compatibility
        │   │   │   ├───dns
        │   │   │   ├───fs
        │   │   │   ├───readline
        │   │   │   ├───stream
        │   │   │   ├───timers
        │   │   │   ├───ts5.6
        │   │   │   │   └───compatibility
        │   │   │   ├───ts5.7
        │   │   │   │   └───compatibility
        │   │   │   └───web-globals
        │   │   ├───react
        │   │   │   └───ts5.0
        │   │   └───react-dom
        │   │       └───test-utils
        │   ├───@typescript-eslint
        │   │   ├───eslint-plugin
        │   │   │   ├───dist
        │   │   │   │   ├───configs
        │   │   │   │   │   ├───eslintrc
        │   │   │   │   │   └───flat
        │   │   │   │   ├───rules
        │   │   │   │   │   ├───enum-utils
        │   │   │   │   │   ├───naming-convention-utils
        │   │   │   │   │   └───prefer-optional-chain-utils
        │   │   │   │   └───util
        │   │   │   │       └───class-scope-analyzer
        │   │   │   └───node_modules
        │   │   │       └───ignore
        │   │   ├───parser
        │   │   │   └───dist
        │   │   ├───project-service
        │   │   │   └───dist
        │   │   ├───scope-manager
        │   │   │   └───dist
        │   │   │       ├───definition
        │   │   │       ├───lib
        │   │   │       ├───referencer
        │   │   │       ├───scope
        │   │   │       └───variable
        │   │   ├───tsconfig-utils
        │   │   │   └───dist
        │   │   ├───type-utils
        │   │   │   └───dist
        │   │   │       └───typeOrValueSpecifiers
        │   │   ├───types
        │   │   │   └───dist
        │   │   │       └───generated
        │   │   ├───typescript-estree
        │   │   │   ├───dist
        │   │   │   │   ├───create-program
        │   │   │   │   ├───jsx
        │   │   │   │   ├───parseSettings
        │   │   │   │   └───ts-estree
        │   │   │   └───node_modules
        │   │   │       ├───.bin
        │   │   │       └───semver
        │   │   │           ├───bin
        │   │   │           ├───classes
        │   │   │           ├───functions
        │   │   │           ├───internal
        │   │   │           └───ranges
        │   │   ├───utils
        │   │   │   └───dist
        │   │   │       ├───ast-utils
        │   │   │       │   └───eslint-utils
        │   │   │       ├───eslint-utils
        │   │   │       ├───ts-eslint
        │   │   │       │   └───eslint
        │   │   │       └───ts-utils
        │   │   └───visitor-keys
        │   │       └───dist
        │   ├───@vitejs
        │   │   └───plugin-react
        │   │       ├───dist
        │   │       └───types
        │   ├───acorn
        │   │   ├───bin
        │   │   └───dist
        │   ├───acorn-jsx
        │   ├───ajv
        │   │   ├───dist
        │   │   ├───lib
        │   │   │   ├───compile
        │   │   │   ├───dot
        │   │   │   ├───dotjs
        │   │   │   └───refs
        │   │   └───scripts
        │   ├───balanced-match
        │   │   └───dist
        │   │       ├───commonjs
        │   │       └───esm
        │   ├───baseline-browser-mapping
        │   │   └───dist
        │   ├───brace-expansion
        │   │   └───dist
        │   │       ├───commonjs
        │   │       └───esm
        │   ├───browserslist
        │   ├───cacheable
        │   │   └───dist
        │   ├───caniuse-lite
        │   │   ├───data
        │   │   │   ├───features
        │   │   │   └───regions
        │   │   └───dist
        │   │       ├───lib
        │   │       └───unpacker
        │   ├───convert-source-map
        │   ├───cookie-es
        │   │   └───dist
        │   ├───cross-spawn
        │   │   └───lib
        │   │       └───util
        │   ├───csstype
        │   ├───debug
        │   │   └───src
        │   ├───deep-is
        │   │   ├───example
        │   │   └───test
        │   ├───dequal
        │   │   ├───dist
        │   │   └───lite
        │   ├───detect-libc
        │   │   └───lib
        │   ├───electron-to-chromium
        │   ├───escalade
        │   │   ├───dist
        │   │   └───sync
        │   ├───escape-string-regexp
        │   ├───eslint
        │   │   ├───bin
        │   │   ├───conf
        │   │   ├───lib
        │   │   │   ├───cli-engine
        │   │   │   │   └───formatters
        │   │   │   ├───config
        │   │   │   ├───eslint
        │   │   │   ├───languages
        │   │   │   │   └───js
        │   │   │   │       └───source-code
        │   │   │   │           └───token-store
        │   │   │   ├───linter
        │   │   │   │   └───code-path-analysis
        │   │   │   ├───rule-tester
        │   │   │   ├───rules
        │   │   │   │   └───utils
        │   │   │   │       └───unicode
        │   │   │   ├───services
        │   │   │   ├───shared
        │   │   │   └───types
        │   │   └───messages
        │   ├───eslint-plugin-react-hooks
        │   │   └───cjs
        │   ├───eslint-plugin-react-refresh
        │   ├───eslint-scope
        │   │   ├───dist
        │   │   └───lib
        │   ├───eslint-visitor-keys
        │   │   ├───dist
        │   │   └───lib
        │   ├───espree
        │   │   ├───dist
        │   │   └───lib
        │   ├───esquery
        │   │   └───dist
        │   ├───esrecurse
        │   ├───estraverse
        │   ├───esutils
        │   │   └───lib
        │   ├───fast-deep-equal
        │   │   └───es6
        │   ├───fast-json-stable-stringify
        │   │   ├───.github
        │   │   ├───benchmark
        │   │   ├───example
        │   │   └───test
        │   ├───fast-levenshtein
        │   ├───fdir
        │   │   └───dist
        │   ├───file-entry-cache
        │   │   └───dist
        │   ├───find-up
        │   ├───flat-cache
        │   │   └───dist
        │   ├───flatted
        │   │   ├───cjs
        │   │   ├───esm
        │   │   ├───golang
        │   │   │   └───pkg
        │   │   │       └───flatted
        │   │   ├───php
        │   │   ├───python
        │   │   └───types
        │   ├───gensync
        │   │   └───test
        │   ├───glob-parent
        │   ├───globals
        │   ├───hashery
        │   │   └───dist
        │   │       ├───browser
        │   │       └───node
        │   ├───hermes-estree
        │   │   └───dist
        │   │       └───generated
        │   ├───hermes-parser
        │   │   └───dist
        │   │       ├───babel
        │   │       ├───estree
        │   │       ├───generated
        │   │       ├───transform
        │   │       ├───traverse
        │   │       └───utils
        │   ├───hookified
        │   │   └───dist
        │   │       ├───browser
        │   │       └───node
        │   ├───ignore
        │   ├───imurmurhash
        │   ├───is-extglob
        │   ├───is-glob
        │   ├───isexe
        │   │   └───test
        │   ├───js-tokens
        │   ├───jsesc
        │   │   ├───bin
        │   │   └───man
        │   ├───json-schema-traverse
        │   │   └───spec
        │   │       └───fixtures
        │   ├───json-stable-stringify-without-jsonify
        │   │   ├───example
        │   │   └───test
        │   ├───json5
        │   │   ├───dist
        │   │   └───lib
        │   ├───keyv
        │   │   └───dist
        │   ├───leaflet
        │   │   ├───dist
        │   │   │   └───images
        │   │   └───src
        │   │       ├───control
        │   │       ├───core
        │   │       ├───dom
        │   │       ├───geo
        │   │       │   ├───crs
        │   │       │   └───projection
        │   │       ├───geometry
        │   │       ├───images
        │   │       ├───layer
        │   │       │   ├───marker
        │   │       │   ├───tile
        │   │       │   └───vector
        │   │       └───map
        │   │           └───handler
        │   ├───levn
        │   │   └───lib
        │   ├───lightningcss
        │   │   └───node
        │   ├───lightningcss-win32-x64-msvc
        │   ├───locate-path
        │   ├───lru-cache
        │   ├───minimatch
        │   │   └───dist
        │   │       ├───commonjs
        │   │       └───esm
        │   ├───ms
        │   ├───nanoid
        │   │   ├───async
        │   │   ├───bin
        │   │   ├───non-secure
        │   │   └───url-alphabet
        │   ├───natural-compare
        │   ├───node-releases
        │   │   └───data
        │   │       ├───processed
        │   │       └───release-schedule
        │   ├───optionator
        │   │   └───lib
        │   ├───p-limit
        │   ├───p-locate
        │   ├───path-exists
        │   ├───path-key
        │   ├───picocolors
        │   ├───picomatch
        │   │   └───lib
        │   ├───postcss
        │   │   └───lib
        │   ├───prelude-ls
        │   │   └───lib
        │   ├───punycode
        │   ├───qified
        │   │   ├───dist
        │   │   └───node_modules
        │   │       └───hookified
        │   │           └───dist
        │   │               ├───browser
        │   │               └───node
        │   ├───react
        │   │   └───cjs
        │   ├───react-dom
        │   │   └───cjs
        │   ├───react-leaflet
        │   │   └───lib
        │   ├───react-router
        │   │   ├───dist
        │   │   │   ├───development
        │   │   │   │   ├───lib
        │   │   │   │   │   ├───dom
        │   │   │   │   │   │   └───ssr
        │   │   │   │   │   ├───dom-export
        │   │   │   │   │   ├───router
        │   │   │   │   │   ├───rsc
        │   │   │   │   │   │   └───html-stream
        │   │   │   │   │   ├───server-runtime
        │   │   │   │   │   │   └───sessions
        │   │   │   │   │   └───types
        │   │   │   │   └───vendor
        │   │   │   │       └───turbo-stream-v2
        │   │   │   └───production
        │   │   │       ├───lib
        │   │   │       │   ├───dom
        │   │   │       │   │   └───ssr
        │   │   │       │   ├───dom-export
        │   │   │       │   ├───router
        │   │   │       │   ├───rsc
        │   │   │       │   │   └───html-stream
        │   │   │       │   ├───server-runtime
        │   │   │       │   │   └───sessions
        │   │   │       │   └───types
        │   │   │       └───vendor
        │   │   │           └───turbo-stream-v2
        │   │   └───docs
        │   │       ├───explanation
        │   │       ├───how-to
        │   │       ├───start
        │   │       │   ├───data
        │   │       │   ├───declarative
        │   │       │   └───framework
        │   │       └───upgrading
        │   ├───rolldown
        │   │   ├───bin
        │   │   └───dist
        │   │       └───shared
        │   ├───scheduler
        │   │   └───cjs
        │   ├───semver
        │   │   └───bin
        │   ├───shebang-command
        │   ├───shebang-regex
        │   ├───source-map-js
        │   │   └───lib
        │   ├───swr
        │   │   ├───dist
        │   │   │   ├───immutable
        │   │   │   ├───index
        │   │   │   ├───infinite
        │   │   │   ├───mutation
        │   │   │   ├───subscription
        │   │   │   └───_internal
        │   │   ├───immutable
        │   │   ├───infinite
        │   │   ├───mutation
        │   │   ├───subscription
        │   │   └───_internal
        │   ├───tinyglobby
        │   │   └───dist
        │   ├───ts-api-utils
        │   │   └───lib
        │   ├───type-check
        │   │   └───lib
        │   ├───typescript
        │   │   ├───bin
        │   │   └───lib
        │   │       ├───cs
        │   │       ├───de
        │   │       ├───es
        │   │       ├───fr
        │   │       ├───it
        │   │       ├───ja
        │   │       ├───ko
        │   │       ├───pl
        │   │       ├───pt-br
        │   │       ├───ru
        │   │       ├───tr
        │   │       ├───zh-cn
        │   │       └───zh-tw
        │   ├───typescript-eslint
        │   │   └───dist
        │   ├───undici-types
        │   ├───update-browserslist-db
        │   ├───uri-js
        │   │   └───dist
        │   │       ├───es5
        │   │       └───esnext
        │   │           └───schemes
        │   ├───use-sync-external-store
        │   │   ├───cjs
        │   │   │   └───use-sync-external-store-shim
        │   │   └───shim
        │   ├───vite
        │   │   ├───bin
        │   │   ├───dist
        │   │   │   ├───client
        │   │   │   └───node
        │   │   │       └───chunks
        │   │   ├───misc
        │   │   └───types
        │   │       └───internal
        │   ├───which
        │   │   └───bin
        │   ├───word-wrap
        │   ├───yallist
        │   ├───yocto-queue
        │   ├───zod
        │   │   ├───locales
        │   │   ├───mini
        │   │   ├───src
        │   │   │   ├───locales
        │   │   │   ├───mini
        │   │   │   ├───v3
        │   │   │   │   ├───benchmarks
        │   │   │   │   ├───helpers
        │   │   │   │   ├───locales
        │   │   │   │   └───tests
        │   │   │   ├───v4
        │   │   │   │   ├───classic
        │   │   │   │   │   └───tests
        │   │   │   │   ├───core
        │   │   │   │   │   └───tests
        │   │   │   │   │       └───locales
        │   │   │   │   ├───locales
        │   │   │   │   └───mini
        │   │   │   │       └───tests
        │   │   │   └───v4-mini
        │   │   ├───v3
        │   │   │   ├───helpers
        │   │   │   └───locales
        │   │   ├───v4
        │   │   │   ├───classic
        │   │   │   ├───core
        │   │   │   ├───locales
        │   │   │   └───mini
        │   │   └───v4-mini
        │   ├───zod-validation-error
        │   │   ├───v3
        │   │   └───v4
        │   └───zustand
        │       ├───esm
        │       │   ├───middleware
        │       │   ├───react
        │       │   └───vanilla
        │       ├───middleware
        │       ├───react
        │       └───vanilla
        ├───public
        └───src
            ├───assets
            ├───components
            │   ├───AlertCard
            │   ├───AlertsList
            │   ├───AlertsMap
            │   └───NavBar
            ├───context
            ├───hooks
            ├───Outlet
            ├───pages
            └───store
```
* I used the command tree for it but node_modules is so long and when you have twice as many because the back and front it is huge problem, a wonderfull we have git ignore haa
---
## Class Name: 
---
Golan ("golani golani shely")
---








