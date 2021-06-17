---
sidebar_position: 2
title: "Props"
sidebar_label: "Props"
---

### `value` (`required`)

Defines the date or time value used in the component.

```js
<RNDateTimePicker value={new Date()} />
```

## Cross-Platform Props

### mode (`optional`)

Defines the type of the picker.

List of possible values:

- `"date"` (default for `iOS` and `Android` and `Windows`)
- `"time"`
- `"datetime"` (`iOS` only)
- `"countdown"` (`iOS` only)

```js
<RNDateTimePicker mode="time" />
```

### `display` (`optional`)

Defines the visual display of the picker. The default value is `"default"`.

List of possible values for Android

- `"default"` - Show a default date picker (spinner/calendar/clock) based on `mode` and Android version.
- `"spinner"`
- `"calendar"` (only for `date` mode)
- `"clock"` (only for `time` mode)

List of possible values for iOS (maps to [preferredDatePickerStyle](https://developer.apple.com/documentation/uikit/uidatepicker/3526124-preferreddatepickerstyle?changes=latest_minor&language=objc))

- `"default"` - Automatically pick the best style available for the current platform & mode.
- `"spinner"` - the usual appearance with a wheel from which you choose values
- `"compact"` - Affects only iOS 14 and later. Will fall back to "spinner" if not supported.
- `"inline"` - Affects only iOS 14 and later. Will fall back to "spinner" if not supported.

```js
<RNDateTimePicker display="spinner" />
```

### `maximumDate` (`optional`)

Defines the maximum date that can be selected. Note that on Android, this only works for `date` mode because [TimePicker](https://developer.android.com/reference/android/widget/TimePicker) does not support this.

```js
<RNDateTimePicker maximumDate={new Date(2300, 10, 20)} />
```

### `minimumDate` (`optional`)

Defines the minimum date that can be selected. Note that on Android, this only works for `date` mode because [TimePicker](https://developer.android.com/reference/android/widget/TimePicker) does not support this.

```js
<RNDateTimePicker minimumDate={new Date(1950, 0, 1)} />
```

### `onChange` (`optional`)

Date change handler.

This is called when the user changes the date or time in the UI. It receives the event and the date as parameters.

```js
setDate = (event, date) => {};

<RNDateTimePicker onChange={this.setDate} />;
```

### `timeZoneOffsetInMinutes` (`optional`, `iOS and Android only`)

Allows changing of the timeZone of the date picker. By default it uses the device's time zone.

```js
// GMT+1
<RNDateTimePicker timeZoneOffsetInMinutes={60} />
```

### `is24Hour` (`optional`, `Windows and Android only`)

Allows changing of the time picker to a 24 hour format. By default, this value is decided automatcially based on the user's chosen locale and other preferences.

```js
<RNDateTimePicker is24Hour={true} />
```

### `neutralButtonLabel` (`optional`, `Android only`)

Allows displaying neutral button on picker dialog.
Pressing button can be observed in onChange handler as `event.type === 'neutralButtonPressed'`

```js
<RNDateTimePicker neutralButtonLabel="clear" />
```

### `minuteInterval` (`optional`)

The interval at which minutes can be selected.
Possible values are: `1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30`

(On Windows, this can be any number between 0-59.)

on iOS, this in only supported when `display="spinner"`

```js
<RNDateTimePicker minuteInterval={10} />
```

## iOS only Props

### `textColor` (`optional`, `iOS only`)

Allows changing of the textColor of the date picker. Has effect only when `display` is `"spinner"`.

```js
<RNDateTimePicker textColor="red" />
```

### `themeVariant` (`optional`, `iOS only`)

Allows overriding system theme variant (dark or light mode) used by the date picker.

:warning: Has effect only on iOS 14 and later. On iOS 13 & less, use `textColor` to make the picker dark-theme compatible

List of possible values:

- `"light"`
- `"dark"`

```js
<RNDateTimePicker themeVariant="light" />
```

### `locale` (`optional`, `iOS only`)

Allows changing of the locale of the component. By default it uses the device's locale.

```js
<RNDateTimePicker locale="es-ES" />
```

### `style` (`optional`, `iOS only`)

Sets style directly on picker component. By default, the picker height is fixed to 216px.

Please note that by default, picker's text color is controlled by the application theme (light / dark mode). In dark mode, text is white and in light mode, text is black.

This means that eg. if the device has dark mode turned on, and your screen background color is white, you will not see the picker. Please use the `Appearance` api to adjust the picker's background color so that it is visible, as we do in the [example App](contributing.md#running-example-app) or [opt-out from dark mode](https://stackoverflow.com/a/56546554/2070942).

```js
<RNDateTimePicker style={{ flex: 1 }} />
```

### `disabled` (`optional`, `iOS only`)

If true, the user won't be able to interact with the view.

## Android only Props

## Windows only Props

### `timeZoneOffsetInSeconds` (`optional`, `Windows only`)

Allows changing of the time zone of the date picker. By default it uses the device's time zone.

```js
// UTC+1
<RNDateTimePicker timeZoneOffsetInSeconds={3600} />
```

### `dayOfWeekFormat` (`optional`, `Windows only`)

Sets the display format for the day of the week headers.
Reference: https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.calendarview.dayofweekformat?view=winrt-18362#remarks

```js
<RNDateTimePicker dayOfWeekFormat={"{dayofweek.abbreviated(2)}"} />
```

### `dateFormat` (`optional`, `Windows only`)

Sets the display format for the date value in the picker's text box.
Reference: https://docs.microsoft.com/en-us/uwp/api/windows.globalization.datetimeformatting.datetimeformatter?view=winrt-18362#examples

```js
<RNDateTimePicker dateFormat="dayofweek day month" />
```

### `firstDayOfWeek` (`optional`, `Windows only`)

Indicates which day is shown as the first day of the week.

```js
<RNDateTimePicker firstDayOfWeek={DAY_OF_WEEK.Wednesday} />
// The native parameter type is an enum defined in defined https://docs.microsoft.com/en-us/uwp/api/windows.globalization.dayofweek?view=winrt-18362 - meaning an integer needs to passed here (DAY_OF_WEEK).
```
