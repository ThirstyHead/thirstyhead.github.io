##&lt;app-scroll-position&gt;

app-scroll-position is a manager for saving and restoring the scroll position when multiple
pages are sharing the same document scroller.

Example:

```html
<app-scroll-position selected="{{page}}"></app-scroll-position>

<app-drawer-layout>

  <app-drawer>
    <paper-listbox selected="{{page}}">
      <paper-item>Home</paper-item>
      <paper-item>About</paper-item>
      <paper-item>Schedule</paper-item>
      <paper-item>Account</paper-item>
    </paper-listbox>
  </app-drawer>

  <div>
    <app-toolbar>
      <paper-icon-button icon="menu" drawer-toggle></paper-icon-button>
    </app-toolbar>
    <iron-pages selected="{{page}}">
      <sample-content size="100"></sample-content>
      <sample-content size="100"></sample-content>
      <sample-content size="100"></sample-content>
      <sample-content size="100"></sample-content>
    </iron-pages>
  </div>

</app-drawer-layout>
```
