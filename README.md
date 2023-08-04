# elcos-animation
 Animazione per Elcos

Installazione
------
Eseguire il seguente comando:
```bash
npm i https://github.com/electrixx90/elcos-animation.git
```

Utilizzo
-------
```javascript
import ElcosAnimation from "elcos-animation/src/lib/ElcosAnimation";

function QualsiasiComponente() {
    return (
        <>
            <ElcosAnimation events={[]} />
        </>
    )
}
```

La proprietà `events` conterrà un array di eventi, ciascuno costituito da una doppietta `[variabile, valore]`, di seguito l'esempio:

```javascript
[
    ["SinotticoMode", "MODE_MAN"],
    ["SinotticoMains", "MAINS_ANOM"],
    ["SinotticoEP", "EP_ON"]
]
```

<b>Sarà premura dell'implementatore garantire che nell'array non ci siano valori doppi di una medesima variabile, come ad esempio:</b>
```javascript
[
    ["SinotticoMode", "MODE_MAN"],
    ["SinotticoMode", "MODE_AUT"],
]
```