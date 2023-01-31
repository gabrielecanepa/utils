# Metatags

## Table of Contents

- [Template](#template)
- [Recommended Minimum](#recommended-minimum)
- [Elements](#elements)
- [In Deep](#in-deep)
  - [Meta](#meta)
  - [Link](#link)
  - [Favicons](#favicons)
  - [Social](#social)
    - [Facebook Open Graph](#facebook-open-graph-and-instant-articles)
    - [Twitter Card](#twitter-card)
    - [Google+](#google-plus)
    - [OEmbed](#oembed)
  - [Browsers / Platforms](#browsers--platforms)
    - [Apple iOS](#apple-ios)
    - [Apple Safari](#apple-safari)
    - [Google Android](#google-android)
    - [Google Chrome](#google-chrome)
    - [Google Chrome Mobile (Android Only)](#google-chrome-mobile-android-only)
    - [Microsoft Internet Explorer](#microsoft-internet-explorer)
  - [Browsers (Chinese)](#browsers-chinese)
    - [360 Browser](#360-browser)
    - [QQ Mobile Browser](#qq-mobile-browser)
    - [UC Mobile Browser](#uc-mobile-browser)
    - [App Links](#app-links)
- [Notes](#notes)
  - [Related Resources](#related-resources)

## Template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Recommend minimum -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta charset="UTF-8">
    <title>Page Title</title>
    <meta name="description" content="A description of the page.">
    <!-- Open graph -->
    <meta property="og:title" content="Page Title">
    <meta property="og:description" content="A description of the page.">
    <meta property="og:site_name" content="Website Name">
    <meta property="og:image" content="http://example.com/image.jpg"> <!-- 1200x630 -->
    <meta property="og:url" content="http://example.com/page.html">
    <!-- Twitter Cards -->
    <meta name="twitter:title" content="Page Title">
    <meta name="twitter:description" content="A description of the page.">
    <meta name="twitter:site" content="Website Name">
    <meta name="twitter:image:src" content="http://example.com/image.jpg"> <!-- 800x418 or 800x800 -->
    <meta name="twitter:creator" content="Author Name">
    <meta name="twitter:card" content="card-name">
    <!-- Favicons (using realfavicongenerator.net, with package placed in images/favicons) -->
    <link rel="apple-touch-icon" sizes="180x180" href="images/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicons/favicon-16x16.png">
    <link rel="manifest" href="images/favicons/site.webmanifest">
    <link rel="mask-icon" href="images/favicons/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="shortcut icon" href="images/favicons/favicon.ico">
    <meta name="msapplication-TileColor" content="#2b5797">
    <meta name="msapplication-config" content="images/favicons/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
    <!-- External libraries -->
    <link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <!-- Stylesheets -->
    <link href="style.css" rel="stylesheet">
  </head>

  <body>

    <!-- External scripts -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js"></script>
    <!-- Scripts -->
    <script src="script.js"></script>
  </body>
</html>
```

[↑ back to top](#table-of-contents)

## Recommended Minimum

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Any other head element after these tags -->
    <title>Page Title</title>
    <meta name="description" content="A description of the page">
    <link type="text/css" rel="stylesheet" href="style.css">
    <style>
      /* CSS code */
    </style>
  </head>
</html>
```

[↑ back to top](#table-of-contents)

## Elements

Valid `<head>` elements include `meta`, `title`, `base`, `link`, `style`, `script` and `noscript`.

``` html
<!-- In the <head>: -->

<!-- Meta -->
<meta charset="utf-8">

<!-- Title -->
<title>Page Title</title>

<!-- Base -->
<base href="http://example.com/page.html">

<!-- Link -->
<link rel="stylesheet" href="styles.css">
<style>
  /* CSS code */
</style>

<!-- At the bottom of the <body>: -->

<!-- Script and Noscript -->
<script src="script.js"></script>
<script>
  // JavaScript code
</script>
<noscript>
  // No JavaScript alternative
</noscript>
```

[↑ back to top](#table-of-contents)

## In Deep

For a complete reference [click here](https://github.com/joshbuchea/HEAD).

### Meta

``` html
<!-- Recommended minimum -->
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!-- Resources control -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'">

<!-- Web application name -->
<meta name="application-name" content="Application Name">

<!-- Description -->
<meta name="description" content="A description of the page">

<!-- Search engine crawling and indexing -->
<meta name="robots" content="index,follow"><!-- All Search Engines -->
<meta name="googlebot" content="index,follow"><!-- Google Specific -->

<!-- Google sitelinks search box -->
<meta name="google" content="nositelinkssearchbox">

<!-- Google translation -->
<meta name="google" content="notranslate">

<!-- Ownership -->
<meta name="google-site-verification" content="verification_token"><!-- Google Search Console -->
<meta name="yandex-verification" content="verification_token"><!-- Yandex Webmasters -->
<meta name="msvalidate.01" content="verification_token"><!-- Bing Webmaster Center -->
<meta name="alexaVerifyID" content="verification_token"><!-- Alexa Console -->
<meta name="p:domain_verify" content="code_from_pinterest"><!-- Pinterest Console-->
<meta name="norton-safeweb-site-verification" content="norton_code"><!-- Norton Safe Web -->

<!-- Software used to build the document -->
<meta name="generator" content="program">

<!-- Subject -->
<meta name="subject" content="Your document's subject">

<!-- Age rating -->
<meta name="rating" content="General">

<!-- Referrer informations -->
<meta name="referrer" content="no-referrer">

<!-- Phone numbers -->
<meta name="format-detection" content="telephone=no">

<!-- DNS prefetching -->
<meta http-equiv="x-dns-prefetch-control" content="off">

<!-- Cookies -->
<meta http-equiv="set-cookie" content="name=value; expires=date; path=url">

<!-- Frame -->
<meta http-equiv="Window-Target" content="_value">

<!-- Geo tags -->
<meta name="ICBM" content="latitude, longitude">
<meta name="geo.position" content="latitude;longitude">
<meta name="geo.region" content="country[-state]"><!-- Country code (ISO 3166-1): mandatory, state code (ISO 3166-2): optional; eg. content="US" / content="US-NY" -->
<meta name="geo.placename" content="city/town"><!-- eg. content="New York City" -->
```

- 📖 [Meta tags that Google understands](https://support.google.com/webmasters/answer/79812?hl=en)
- 📖 [WHATWG Wiki: MetaExtensions](https://wiki.whatwg.org/wiki/MetaExtensions)

### Link

``` html
<!-- External stylesheet -->
<link rel="stylesheet" href="http://example.com/styles.css">

<!-- Duplicate issues -->
<link rel="canonical" href="http://example.com/2010/06/9-things-to-do-before-entering-social-media.html">

<!-- Shortlink (deprecated) -->
<link rel="shortlink" href="http://example.com/?p=42">

<!-- AMP HTML version -->
<link rel="amphtml" href="http://example.com/path/to/amp-version.html">

<!-- JSON for "installation" credentials for the web applications -->
<link rel="manifest" href="manifest.json">

<!-- Author -->
<link rel="author" href="humans.txt">

<!-- Author/people -->
<link rel="me" href="https://google.com/profiles/thenextweb" type="text/html">
<link rel="me" href="mailto:name@example.com">
<link rel="me" href="sms:+15035550125">

<!-- Copyright -->
<link rel="license" href="copyright.html">

<!-- Other languages -->
<link rel="alternate" href="https://es.example.com/" hreflang="es">

<!-- Archive -->
<link rel="archives" href="http://example.com/archives/">

<!-- Top level resources -->
<link rel="index" href="http://example.com/">

<!-- Self reference -->
<link rel="self" type="application/atom+xml" href="http://example.com/atomFeed.php?page=3">

<!-- Series of documents -->
<link rel="first" href="http://example.com/atomFeed.php">
<link rel="next" href="http://example.com/atomFeed.php?page=4">
<link rel="prev" href="http://example.com/atomFeed.php?page=2">
<link rel="last" href="http://example.com/atomFeed.php?page=147">

<!-- Third party service -->
<link rel="EditURI" href="http://example.com/xmlrpc.php?rsd" type="application/rsd+xml" title="RSD">

<!-- WordPress auto-comment -->
<link rel="pingback" href="http://example.com/xmlrpc.php">

<!-- URL notification -->
<link rel="webmention" href="http://example.com/webmention">

<!-- Micropub client -->
<link rel="micropub" href="http://example.com/micropub">

<!-- External HTML file loading -->
<link rel="import" href="/path/to/component.html">

<!-- Open Search -->
<link rel="search" href="/open-search.xml" type="application/opensearchdescription+xml" title="Search Title">

<!-- Feeds -->
<link rel="alternate" href="https://feeds.feedburner.com/example" type="application/rss+xml" title="RSS">
<link rel="alternate" href="http://example.com/feed.atom" type="application/atom+xml" title="Atom 0.3">

<!-- Prefetching, preloading, prebrowsing (more info at https://css-tricks.com/prefetching-preloading-prebrowsing/) -->
<link rel="dns-prefetch" href="//example.com/">
<link rel="preconnect" href="https://www.example.com/">
<link rel="prefetch" href="https://www.example.com/">
<link rel="prerender" href="http://example.com/">
<link rel="preload" href="image.png" as="image">
```

### Favicons

``` html
<link rel="icon" type="image/png" sizes="16x16" href="/path/to/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/path/to/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/path/to/favicon-96x96.png">
```

- 📖 [Favicon generator](https://realfavicongenerator.net/)
- 📖 [All about favicons (and touch icons)](https://bitsofco.de/all-about-favicons-and-touch-icons/)
- 📖 [Favicon cheatsheet](https://github.com/audreyr/favicon-cheat-sheet)

### Social

#### Facebook Open Graph and instant articles

``` html
<meta property="fb:app_id" content="123456789">
<meta property="og:url" content="http://example.com/page.html">
<meta property="og:type" content="website">
<meta property="og:title" content="Content Title">
<meta property="og:image" content="http://example.com/image.jpg">
<meta property="og:description" content="Description Here">
<meta property="og:site_name" content="Site Name">
<meta property="og:locale" content="en_US">
<meta property="article:author" content="">
```

- 📖 [Facebook Open Graph markup](https://developers.facebook.com/docs/sharing/webmasters#markup)
- 📖 [Open Graph protocol](http://ogp.me/)
- 🛠 Test your page with the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

``` html
<meta charset="utf-8">
<meta property="op:markup_version" content="v1.0">
<link rel="canonical" href="http://example.com/article.html">
<meta property="fb:article_style" content="myarticlestyle">
```

- 📖 [Creating articles](https://developers.facebook.com/docs/instant-articles/guides/articlecreate)
- 📖 [Code samples](https://developers.facebook.com/docs/instant-articles/reference)

#### Twitter Card

``` html
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@site_account">
<meta name="twitter:creator" content="@individual_account">
<meta name="twitter:url" content="http://example.com/page.html">
<meta name="twitter:title" content="Content Title">
<meta name="twitter:description" content="Content description less than 200 characters">
<meta name="twitter:image" content="http://example.com/image.jpg">
```

- 📖 [Getting started with cards — Twitter Developers](https://dev.twitter.com/cards/getting-started)
- 🛠 Test your page with the [Twitter Card Validator](https://cards-dev.twitter.com/validator)

#### Google Plus

``` html
<link href="https://plus.google.com/+YourPage" rel="publisher">
<meta itemprop="name" content="Content Title">
<meta itemprop="description" content="Content description less than 200 characters">
<meta itemprop="image" content="http://example.com/image.jpg">
```

#### OEmbed

``` html
<link rel="alternate" type="application/json+oembed" href="http://example.com/services/oembed?url=http%3A%2F%2Fexample.com%2Ffoo%2F&amp;format=json" title="oEmbed Profile: JSON">
<link rel="alternate" type="text/xml+oembed" href="http://example.com/services/oembed?url=http%3A%2F%2Fexample.com%2Ffoo%2F&amp;format=xml" title="oEmbed Profile: XML">
```

- 📖 [oEmbed format](http://oembed.com/)

### Browsers / Platforms

#### Apple iOS

``` html
<!-- Smart App Banner -->
<meta name="apple-itunes-app" content="app-id=APP_ID,affiliate-data=AFFILIATE_ID,app-argument=SOME_TEXT">

<!-- Phone numbers -->
<meta name="format-detection" content="telephone=no">

<!-- Home screen -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="App Title">

<!-- Touch icon -->
<link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png">

<!-- Startup image (deprecated) -->
<link rel="apple-touch-startup-image" href="/path/to/startup.png">

<!-- iOS app deep linking -->
<meta name="apple-itunes-app" content="app-id=APP-ID, app-argument=http/url-sample.com">
<link rel="alternate" href="ios-app://APP-ID/http/url-sample.com">
```

- 📖 [Apple Meta Tags](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html)

#### Apple Safari

```html
<!-- Pinned Site -->
<link rel="mask-icon" href="/path/to/icon.svg" color="red">
```

#### Google Android

``` html
<meta name="theme-color" content="#E64545">

<!-- Add to home screen -->
<meta name="mobile-web-app-capable" content="yes">

<!-- Android app deep linking -->
<meta name="google-play-app" content="app-id=package-name">
<link rel="alternate" href="android-app://package-name/http/url-sample.com">
```

- 📖 [Install to Android home screen](https://developer.chrome.com/multidevice/android/installtohomescreen)

#### Google Chrome

``` html
<link rel="chrome-webstore-item" href="https://chrome.google.com/webstore/detail/APP_ID">

<!-- Prompt -->
<meta name="google" content="notranslate">
```

#### Google Chrome Mobile (Android Only)


``` html
<!-- Mainfest -->
<link rel="manifest" href="manifest.json">

<!-- Define web app -->
<meta name="mobile-web-app-capable" content="yes">

<!-- Homescreen icon -->
<link rel="icon" sizes="192x192" href="/path/to/highres-icon.png">
```

- 📖 [Add to Homescreen - Google Chrome](https://developer.chrome.com/multidevice/android/installtohomescreen)

#### Microsoft Internet Explorer

``` html
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="skype_toolbar" content="skype_toolbar_parser_compatible">

<!-- Link highlightning -->
<meta name="msapplication-tap-highlight" content="no">

<!-- Pinned sites  -->
<meta name="application-name" content="Sample Title">
<meta name="msapplication-tooltip" content="A description of what this site does.">
<meta name="msapplication-starturl" content="http://example.com/index.html?pinned=true">
<meta name="msapplication-navbutton-color" content="#FF3300">
<meta name="msapplication-window" content="width=800;height=600">
<meta name="msapplication-task" content="name=Task 1;action-uri=http://host/Page1.html;icon-uri=http://host/icon1.ico">
<meta name="msapplication-task" content="name=Task 2;action-uri=http://microsoft.com/Page2.html;icon-uri=http://host/icon2.ico">
<meta name="msapplication-badge" value="frequency=NUMBER_IN_MINUTES;polling-uri=http://example.com/path/to/file.xml">
<meta name="msapplication-TileColor" content="#FF3300">
<meta name="msapplication-TileImage" content="/path/to/tileimage.jpg">
<meta name="msapplication-config" content="http://example.com/browserconfig.xml">
<meta name="msapplication-notification" content="frequency=60;polling-uri=http://example.com/livetile;polling-uri2=http://example.com/livetile2">
<meta name="msapplication-task-separator" content="1">
```

#### App Links

``` html
<!-- iOS -->
<meta property="al:ios:url" content="applinks://docs">
<meta property="al:ios:app_store_id" content="12345">
<meta property="al:ios:app_name" content="App Links">

<!-- Android -->
<meta property="al:android:url" content="applinks://docs">
<meta property="al:android:app_name" content="App Links">
<meta property="al:android:package" content="org.applinks">

<!-- Web fall back -->
<meta property="al:web:url" content="http://applinks.org/documentation">
```

- 📖 [App Links](http://applinks.org/documentation/)

### Browsers (Chinese)

#### 360 Browser

``` html
<!-- Engine order -->
<meta name="renderer" content="webkit|ie-comp|ie-stand">
```

#### QQ Mobile Browser

``` html
<!-- Orientation -->
<meta name="x5-orientation" content="landscape/portrait">

<!-- Fullscreen -->
<meta name="x5-fullscreen" content="true">

<!-- Application mode -->
<meta name="x5-page-mode" content="app">
```

#### UC Mobile Browser

``` html
<!-- Orientation -->
<meta name="screen-orientation" content="landscape/portrait">

<!-- Fullscreen -->
<meta name="full-screen" content="yes">

<!-- Images in text mode -->
<meta name="imagemode" content="force">

<!-- Application mode -->
<meta name="browsermode" content="application">

<!-- Disabled night mode -->
<meta name="nightmode" content="disable">

<!-- Simplify the document -->
<meta name="layoutmode" content="fitscreen">

<!-- Scaling fonts -->
<meta name="wap-font-scale" content="no">
```

- 📖 [UC Browser Docs](http://www.uc.cn/download/UCBrowser_U3_API.doc)

[↑ back to top](#table-of-contents)

## Notes

### Related Resources

- [Atom HTML Head Snippets](https://github.com/joshbuchea/atom-html-head-snippets) - Atom package for `HEAD` snippets
- [Sublime Text HTML Head Snippets](https://github.com/marcobiedermann/sublime-head-snippets) - Sublime Text package for `HEAD` snippets
- [head-it](https://github.com/hemanth/head-it) - CLI interface for `HEAD` snippets
- [vue-head](https://github.com/ktquez/vue-head) - Manipulating the meta information of the `HEAD` tag for Vue.js

[↑ back to top](#table-of-contents)
