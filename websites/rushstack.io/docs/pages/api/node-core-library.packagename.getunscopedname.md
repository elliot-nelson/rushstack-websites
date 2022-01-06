---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rushstack/node-core-library](./node-core-library.md) &gt; [PackageName](./node-core-library.packagename.md) &gt; [getUnscopedName](./node-core-library.packagename.getunscopedname.md)

## PackageName.getUnscopedName() method

The parsed NPM package name without the scope.

<b>Signature:</b>

```typescript
static getUnscopedName(packageName: string): string;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  packageName | string |  |

<b>Returns:</b>

string

## Remarks

For example, if the parsed input was " @ scope/example", then the name would be "example".
