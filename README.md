# ng2-debounce

Deboune one or more native events in a angular 2 app with a directive.

## Instalation

```bash
$ npm install ng2-debounce --save
```

## Usage

<ol>
  <li>Add the "ng2-debounce" directive to a native dom element.</li>
  <li>Bind to "ng2dEvent" the event/s to debounce.</li>
  <li>Listen to "ng2dOnEvent".</li>
</ol>

```xml
<input
  type="text"
  ng2-debounce
  [ng2dEvent]="'keyup'"
  (ng2dOnEvent)="myHandler($event)"
>
```

This is a list of parameters for the directive:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>ng2dEvent</td>
      <td>string | string[]</td>
      <td>yes</td>
      <td></td>
      <td>This should be set first and represent the event or group or events
      that should be debounced.</td>
    </tr>
    <tr>
      <td>ng2dDelay</td>
      <td>number</td>
      <td>no</td>
      <td>3000</td>
      <td>Delay of the event in miliseconds.</td>
    </tr>
    <tr>
      <td>ng2dOnEvent</td>
      <td>function($event: any) => void</td>
      <td>yes</td>
      <td></td>
      <td>A handler that will get all the info from the event.</td>
    </tr>
  </tbody>
</table>

## Examples

### Debounce one event

Debounce the "keyup" event and call "myHandler" when it is done.

```xml
<input
  type="text"
  ng2-debounce
  [ng2dEvent]="'keyup'"
  (ng2dOnEvent)="myHandler($event)"
>
```

### Debounce multiple events

Debounce "keyup" and "change" events and call "myHandler" when any of this is done.

```xml
<input
  type="number"
  ng2-debounce
  [ng2dEvent]="['keyup', 'change']"
  (ng2dOnEvent)="myHandler($event)"
>
```

### Change the delay

Change the delay to execute "myHandler" to 1000 miliseconds.
Works with multiple events.

```xml
<input
  type="text"
  ng2-debounce
  [ng2dEvent]="'keyup'"
  [ng2dDelay]="1000"
  (ng2dOnEvent)="myHandler($event)"
>
```

## License

MIT © [Alva Damián](mailto:alva.damian@yahoo.com.ar)
