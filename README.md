# 🏆 Portafolio QA - Luciana Calvi

      Bienvenido a mi portafolio de pruebas automatizadas con Cypress. Este repositorio contiene pruebas 
      desarrolladas para validar el flujo de inicio de sesion y registro en el sitio web: 
      https://petstore.octoperf.com/actions/Catalog.action 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## 📚 Contenido

- [🎯 Objetivo del Proyecto](#-objetivo-del-proyecto)
- [📥 Clonación del Repositorio](#-clonación-del-repositorio)
- [🚀 Pruebas Realizadas](#-pruebas-realizadas)
- [🛠️ Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [📂 Estructura del Proyecto](#-estructura-del-proyecto)
- [▶️ Cómo Ejecutar las Pruebas](#️-cómo-ejecutar-las-pruebas)
- [📸 Capturas de Pantalla / Videos](#-capturas-de-pantalla--videos)



## 🎯 Objetivo del Proyecto
  
      El objetivo de este repositorio es demostrar mis habilidades en pruebas automatizadas utilizando Cypress, validando el flujo completo de inicio de sesion y registro
      Este proyecto forma parte de mi portafolio como QA Manual con conocimientos en automatización.

## 📥 Clonación del Repositorio

      Para obtener una copia local del proyecto, ejecuta el siguiente comando en tu terminal:
      https://github.com/Luciana-Calvi/proyectoCypress.git

## 🚀 Pruebas Realizadas

      📌 loginOk.cy.js - Incluye un caso positivo (credenciales válidas) y uno negativo (credenciales inválidas, verificación del mensaje de error y captura de pantalla).
      📌 loginFail.cy.js - Incluye un caso negativo (credenciales inválidas, verificación del mensaje de   error).
      📌 registroOk.cy.js - Incluye casos positivos.
      📌 registroFail.cy.js - Incluye casos negativos y con campos vacíos. 

## 🛠️ Tecnologías Utilizadas

      🏗️ Cypress (para las pruebas automatizadas)

      💻 JavaScript (lenguaje principal para los tests)
      
      🔗 Git y GitHub (control de versiones y repositorio remoto)

## 📂 Estructura del Proyecto

      C:.
├───cypress
│   ├───downloads
│   ├───e2e
│   │   └───selectores
│   ├───fixtures
│   └───support
├───node_modules
│   ├───.bin
│   ├───@cypress
│   │   ├───request
│   │   │   └───lib
│   │   └───xvfb
│   │       └───node_modules
│   │           └───debug
│   │               └───src
│   ├───@types
│   │   ├───node
│   │   │   ├───assert
│   │   │   ├───compatibility
│   │   │   ├───dns
│   │   │   ├───fs
│   │   │   ├───readline
│   │   │   ├───stream
│   │   │   ├───timers
│   │   │   ├───ts5.1
│   │   │   │   └───compatibility
│   │   │   ├───ts5.6
│   │   │   │   └───compatibility
│   │   │   └───ts5.7
│   │   │       └───compatibility
│   │   ├───sinonjs__fake-timers
│   │   ├───sizzle
│   │   └───yauzl
│   ├───aggregate-error
│   ├───ansi-colors
│   │   └───types
│   ├───ansi-escapes
│   │   └───node_modules
│   │       └───type-fest
│   │           ├───source
│   │           └───ts41
│   ├───ansi-regex
│   ├───ansi-styles
│   ├───arch
│   ├───asn1
│   │   └───lib
│   │       └───ber
│   ├───assert-plus
│   ├───astral-regex
│   ├───async
│   │   ├───dist
│   │   └───internal
│   ├───asynckit
│   │   └───lib
│   ├───at-least-node
│   ├───aws-sign2
│   ├───aws4
│   ├───base64-js
│   ├───bcrypt-pbkdf
│   ├───blob-util
│   │   └───dist
│   ├───bluebird
│   │   └───js
│   │       ├───browser
│   │       └───release
│   ├───buffer
│   ├───buffer-crc32
│   ├───cachedir
│   ├───call-bind-apply-helpers
│   │   ├───.github
│   │   └───test
│   ├───call-bound
│   │   ├───.github
│   │   └───test
│   ├───caseless
│   ├───chalk
│   │   ├───node_modules
│   │   │   └───supports-color
│   │   └───source
│   ├───check-more-types
│   │   └───dist
│   ├───ci-info
│   ├───clean-stack
│   ├───cli-cursor
│   ├───cli-table3
│   │   └───src
│   ├───cli-truncate
│   ├───color-convert
│   ├───color-name
│   ├───colorette
│   ├───colors
│   │   ├───examples
│   │   ├───lib
│   │   │   ├───custom
│   │   │   ├───maps
│   │   │   └───system
│   │   └───themes
│   ├───combined-stream
│   │   └───lib
│   ├───commander
│   │   └───typings
│   ├───common-tags
│   │   ├───dist
│   │   ├───es
│   │   │   ├───codeBlock
│   │   │   ├───commaLists
│   │   │   ├───commaListsAnd
│   │   │   ├───commaListsOr
│   │   │   ├───html
│   │   │   ├───inlineArrayTransformer
│   │   │   ├───inlineLists
│   │   │   ├───oneLine
│   │   │   ├───oneLineCommaLists
│   │   │   ├───oneLineCommaListsAnd
│   │   │   ├───oneLineCommaListsOr
│   │   │   ├───oneLineInlineLists
│   │   │   ├───oneLineTrim
│   │   │   ├───removeNonPrintingValuesTransformer
│   │   │   ├───replaceResultTransformer
│   │   │   ├───replaceStringTransformer
│   │   │   ├───replaceSubstitutionTransformer
│   │   │   ├───safeHtml
│   │   │   ├───source
│   │   │   ├───splitStringTransformer
│   │   │   ├───stripIndent
│   │   │   ├───stripIndents
│   │   │   ├───stripIndentTransformer
│   │   │   ├───TemplateTag
│   │   │   ├───trimResultTransformer
│   │   │   └───utils
│   │   │       └───readFromFixture
│   │   └───lib
│   │       ├───codeBlock
│   │       ├───commaLists
│   │       ├───commaListsAnd
│   │       ├───commaListsOr
│   │       ├───html
│   │       ├───inlineArrayTransformer
│   │       ├───inlineLists
│   │       ├───oneLine
│   │       ├───oneLineCommaLists
│   │       ├───oneLineCommaListsAnd
│   │       ├───oneLineCommaListsOr
│   │       ├───oneLineInlineLists
│   │       ├───oneLineTrim
│   │       ├───removeNonPrintingValuesTransformer
│   │       ├───replaceResultTransformer
│   │       ├───replaceStringTransformer
│   │       ├───replaceSubstitutionTransformer
│   │       ├───safeHtml
│   │       ├───source
│   │       ├───splitStringTransformer
│   │       ├───stripIndent
│   │       ├───stripIndents
│   │       ├───stripIndentTransformer
│   │       ├───TemplateTag
│   │       ├───trimResultTransformer
│   │       └───utils
│   │           └───readFromFixture
│   ├───core-util-is
│   │   └───lib
│   ├───cross-spawn
│   │   └───lib
│   │       └───util
│   ├───cypress
│   │   ├───angular
│   │   │   ├───angular
│   │   │   │   └───dist
│   │   │   └───dist
│   │   ├───bin
│   │   ├───lib
│   │   │   ├───exec
│   │   │   └───tasks
│   │   ├───mount-utils
│   │   │   ├───dist
│   │   │   └───mount-utils
│   │   │       └───dist
│   │   ├───react
│   │   │   ├───dist
│   │   │   └───react
│   │   │       └───dist
│   │   ├───svelte
│   │   │   ├───dist
│   │   │   └───svelte
│   │   │       └───dist
│   │   ├───types
│   │   │   ├───bluebird
│   │   │   ├───chai
│   │   │   ├───chai-jquery
│   │   │   ├───jquery
│   │   │   ├───lodash
│   │   │   │   ├───common
│   │   │   │   └───fp
│   │   │   ├───minimatch
│   │   │   ├───mocha
│   │   │   ├───sinon
│   │   │   └───sinon-chai
│   │   └───vue
│   │       ├───dist
│   │       └───vue
│   │           └───dist
│   ├───dashdash
│   │   ├───etc
│   │   └───lib
│   ├───dayjs
│   │   ├───esm
│   │   │   ├───locale
│   │   │   └───plugin
│   │   │       ├───advancedFormat
│   │   │       ├───arraySupport
│   │   │       ├───badMutable
│   │   │       ├───bigIntSupport
│   │   │       ├───buddhistEra
│   │   │       ├───calendar
│   │   │       ├───customParseFormat
│   │   │       ├───dayOfYear
│   │   │       ├───devHelper
│   │   │       ├───duration
│   │   │       ├───isBetween
│   │   │       ├───isLeapYear
│   │   │       ├───isMoment
│   │   │       ├───isoWeek
│   │   │       ├───isoWeeksInYear
│   │   │       ├───isSameOrAfter
│   │   │       ├───isSameOrBefore
│   │   │       ├───isToday
│   │   │       ├───isTomorrow
│   │   │       ├───isYesterday
│   │   │       ├───localeData
│   │   │       ├───localizedFormat
│   │   │       ├───minMax
│   │   │       ├───negativeYear
│   │   │       ├───objectSupport
│   │   │       ├───pluralGetSet
│   │   │       ├───preParsePostFormat
│   │   │       ├───quarterOfYear
│   │   │       ├───relativeTime
│   │   │       ├───timezone
│   │   │       ├───toArray
│   │   │       ├───toObject
│   │   │       ├───updateLocale
│   │   │       ├───utc
│   │   │       ├───weekday
│   │   │       ├───weekOfYear
│   │   │       └───weekYear
│   │   ├───locale
│   │   └───plugin
│   ├───debug
│   │   └───src
│   ├───delayed-stream
│   │   └───lib
│   ├───dunder-proto
│   │   ├───.github
│   │   └───test
│   ├───ecc-jsbn
│   │   └───lib
│   ├───emoji-regex
│   │   └───es2015
│   ├───end-of-stream
│   ├───enquirer
│   │   └───lib
│   │       ├───prompts
│   │       └───types
│   ├───es-define-property
│   │   ├───.github
│   │   └───test
│   ├───es-errors
│   │   ├───.github
│   │   └───test
│   ├───es-object-atoms
│   │   ├───.github
│   │   └───test
│   ├───es-set-tostringtag
│   │   └───test
│   ├───escape-string-regexp
│   ├───eventemitter2
│   │   └───lib
│   ├───execa
│   │   └───lib
│   ├───executable
│   ├───extend
│   ├───extract-zip
│   ├───extsprintf
│   │   └───lib
│   ├───fd-slicer
│   │   └───test
│   ├───figures
│   ├───forever-agent
│   ├───form-data
│   │   └───lib
│   ├───fs-extra
│   │   └───lib
│   │       ├───copy
│   │       ├───copy-sync
│   │       ├───empty
│   │       ├───ensure
│   │       ├───fs
│   │       ├───json
│   │       ├───mkdirs
│   │       ├───move
│   │       ├───move-sync
│   │       ├───output
│   │       ├───path-exists
│   │       ├───remove
│   │       └───util
│   ├───function-bind
│   │   ├───.github
│   │   └───test
│   ├───get-intrinsic
│   │   ├───.github
│   │   └───test
│   ├───get-proto
│   │   ├───.github
│   │   └───test
│   ├───get-stream
│   ├───getos
│   │   ├───imgs
│   │   ├───logic
│   │   └───tests
│   │       ├───alpine
│   │       │   └───3.3
│   │       ├───debian
│   │       │   ├───7.3
│   │       │   ├───7.4
│   │       │   ├───7.5
│   │       │   └───7.6
│   │       ├───fedora
│   │       │   └───20
│   │       └───ubuntu
│   │           ├───13.10
│   │           └───14.04
│   ├───getpass
│   │   └───lib
│   ├───global-dirs
│   ├───gopd
│   │   ├───.github
│   │   └───test
│   ├───graceful-fs
│   ├───has-flag
│   ├───has-symbols
│   │   ├───.github
│   │   └───test
│   │       └───shams
│   ├───has-tostringtag
│   │   ├───.github
│   │   └───test
│   │       └───shams
│   ├───hasha
│   ├───hasown
│   │   └───.github
│   ├───http-signature
│   │   └───lib
│   ├───human-signals
│   │   └───build
│   │       └───src
│   ├───ieee754
│   ├───indent-string
│   ├───ini
│   ├───is-fullwidth-code-point
│   ├───is-installed-globally
│   ├───is-path-inside
│   ├───is-stream
│   ├───is-typedarray
│   ├───is-unicode-supported
│   ├───isexe
│   │   └───test
│   ├───isstream
│   ├───jsbn
│   ├───json-schema
│   │   └───lib
│   ├───json-stringify-safe
│   │   └───test
│   ├───jsonfile
│   ├───jsprim
│   │   └───lib
│   ├───lazy-ass
│   │   └───test
│   ├───listr2
│   │   └───dist
│   │       ├───constants
│   │       ├───interfaces
│   │       ├───lib
│   │       ├───renderer
│   │       └───utils
│   ├───lodash
│   │   └───fp
│   ├───lodash.once
│   ├───log-symbols
│   ├───log-update
│   │   └───node_modules
│   │       ├───slice-ansi
│   │       └───wrap-ansi
│   ├───math-intrinsics
│   │   ├───.github
│   │   ├───constants
│   │   └───test
│   ├───merge-stream
│   ├───mime-db
│   ├───mime-types
│   ├───mimic-fn
│   ├───minimist
│   │   ├───.github
│   │   ├───example
│   │   └───test
│   ├───ms
│   ├───npm-run-path
│   ├───object-inspect
│   │   ├───.github
│   │   ├───example
│   │   └───test
│   │       └───browser
│   ├───once
│   ├───onetime
│   ├───ospath
│   ├───p-map
│   ├───path-key
│   ├───pend
│   ├───performance-now
│   │   ├───lib
│   │   ├───src
│   │   └───test
│   │       └───scripts
│   ├───pify
│   ├───pretty-bytes
│   ├───process
│   ├───proxy-from-env
│   ├───pump
│   │   └───.github
│   ├───qs
│   │   ├───.github
│   │   ├───dist
│   │   ├───lib
│   │   └───test
│   ├───request-progress
│   │   └───test
│   ├───restore-cursor
│   ├───rfdc
│   │   ├───.github
│   │   │   └───workflows
│   │   └───test
│   ├───rxjs
│   │   ├───ajax
│   │   ├───dist
│   │   │   ├───bundles
│   │   │   ├───cjs
│   │   │   │   ├───ajax
│   │   │   │   ├───fetch
│   │   │   │   ├───internal
│   │   │   │   │   ├───ajax
│   │   │   │   │   ├───observable
│   │   │   │   │   │   └───dom
│   │   │   │   │   ├───operators
│   │   │   │   │   ├───scheduled
│   │   │   │   │   ├───scheduler
│   │   │   │   │   ├───symbol
│   │   │   │   │   ├───testing
│   │   │   │   │   └───util
│   │   │   │   ├───operators
│   │   │   │   ├───testing
│   │   │   │   └───webSocket
│   │   │   ├───esm
│   │   │   │   ├───ajax
│   │   │   │   ├───fetch
│   │   │   │   ├───internal
│   │   │   │   │   ├───ajax
│   │   │   │   │   ├───observable
│   │   │   │   │   │   └───dom
│   │   │   │   │   ├───operators
│   │   │   │   │   ├───scheduled
│   │   │   │   │   ├───scheduler
│   │   │   │   │   ├───symbol
│   │   │   │   │   ├───testing
│   │   │   │   │   └───util
│   │   │   │   ├───operators
│   │   │   │   ├───testing
│   │   │   │   └───webSocket
│   │   │   ├───esm5
│   │   │   │   ├───ajax
│   │   │   │   ├───fetch
│   │   │   │   ├───internal
│   │   │   │   │   ├───ajax
│   │   │   │   │   ├───observable
│   │   │   │   │   │   └───dom
│   │   │   │   │   ├───operators
│   │   │   │   │   ├───scheduled
│   │   │   │   │   ├───scheduler
│   │   │   │   │   ├───symbol
│   │   │   │   │   ├───testing
│   │   │   │   │   └───util
│   │   │   │   ├───operators
│   │   │   │   ├───testing
│   │   │   │   └───webSocket
│   │   │   └───types
│   │   │       ├───ajax
│   │   │       ├───fetch
│   │   │       ├───internal
│   │   │       │   ├───ajax
│   │   │       │   ├───observable
│   │   │       │   │   └───dom
│   │   │       │   ├───operators
│   │   │       │   ├───scheduled
│   │   │       │   ├───scheduler
│   │   │       │   ├───symbol
│   │   │       │   ├───testing
│   │   │       │   └───util
│   │   │       ├───operators
│   │   │       ├───testing
│   │   │       └───webSocket
│   │   ├───fetch
│   │   ├───operators
│   │   ├───src
│   │   │   ├───ajax
│   │   │   ├───fetch
│   │   │   ├───internal
│   │   │   │   ├───ajax
│   │   │   │   ├───observable
│   │   │   │   │   └───dom
│   │   │   │   ├───operators
│   │   │   │   ├───scheduled
│   │   │   │   ├───scheduler
│   │   │   │   ├───symbol
│   │   │   │   ├───testing
│   │   │   │   └───util
│   │   │   ├───operators
│   │   │   ├───testing
│   │   │   └───webSocket
│   │   ├───testing
│   │   └───webSocket
│   ├───safe-buffer
│   ├───safer-buffer
│   ├───semver
│   │   ├───bin
│   │   ├───classes
│   │   ├───functions
│   │   ├───internal
│   │   └───ranges
│   ├───shebang-command
│   ├───shebang-regex
│   ├───side-channel
│   │   ├───.github
│   │   └───test
│   ├───side-channel-list
│   │   ├───.github
│   │   └───test
│   ├───side-channel-map
│   │   ├───.github
│   │   └───test
│   ├───side-channel-weakmap
│   │   ├───.github
│   │   └───test
│   ├───signal-exit
│   ├───slice-ansi
│   ├───sshpk
│   │   ├───bin
│   │   ├───lib
│   │   │   └───formats
│   │   └───man
│   │       └───man1
│   ├───string-width
│   ├───strip-ansi
│   ├───strip-final-newline
│   ├───supports-color
│   ├───throttleit
│   ├───through
│   │   └───test
│   ├───tldts
│   │   ├───bin
│   │   ├───dist
│   │   │   ├───cjs
│   │   │   │   └───src
│   │   │   │       └───data
│   │   │   ├───es6
│   │   │   │   └───src
│   │   │   │       └───data
│   │   │   └───types
│   │   │       └───src
│   │   │           └───data
│   │   └───src
│   │       └───data
│   ├───tldts-core
│   │   ├───dist
│   │   │   ├───cjs
│   │   │   │   └───src
│   │   │   │       └───lookup
│   │   │   ├───es6
│   │   │   │   └───src
│   │   │   │       └───lookup
│   │   │   └───types
│   │   │       └───src
│   │   │           └───lookup
│   │   └───src
│   │       └───lookup
│   ├───tmp
│   │   └───lib
│   ├───tough-cookie
│   │   └───dist
│   │       └───cookie
│   ├───tree-kill
│   ├───tslib
│   │   └───modules
│   ├───tunnel-agent
│   ├───tweetnacl
│   ├───type-fest
│   │   └───source
│   ├───undici-types
│   ├───universalify
│   ├───untildify
│   ├───uuid
│   │   └───dist
│   │       ├───bin
│   │       ├───esm-browser
│   │       ├───esm-node
│   │       └───umd
│   ├───verror
│   │   └───lib
│   ├───which
│   │   └───bin
│   ├───wrap-ansi
│   ├───wrappy
│   └───yauzl
└───proyectoCypress
    └───cypress
        ├───e2e
        │   └───selectores
        ├───fixtures
        └───support

## ▶️ Cómo Ejecutar las Pruebas

      📌 Requisitos Previos

            Instalar Cypress: Cypress se puede instalar mediante npm (Node
            Package Manager) ejecutando el siguiente comando en la línea
            de comando:
                        npm install cypress

       🚀 Ejecutar las pruebas
        
            Crear un proyecto de Cypress: Una vez instalado Cypress, se
            puede crear un nuevo proyecto ejecutando el siguiente comando en
            la línea de comando:
                                npx cypress open

## 📸 Videos

-[loginOK](https://drive.google.com/file/d/1NAvHGn3FQWf-85G9A5pv90sINTg5F0h7/view?usp=sharing)

-[loginFail](https://drive.google.com/file/d/1Syawm5GPycYhI1rY-9yRC1Q2MPsJwEWS/view?usp=sharing)

-[registroOk](https://drive.google.com/file/d/1RHpWflmpIGlu_wllr6eefXm3WKYibXyj/view?usp=sharing)

-[registroFail](https://drive.google.com/file/d/19xtRCZjBm4Eo4W4CLzdfeu_MI2QEAYL-/view?usp=sharing)
