export {
  BROWSER_PROVIDERS,
  ELEMENT_PROBE_BINDINGS,
  ELEMENT_PROBE_PROVIDERS,
  inspectNativeElement,
  BrowserDomAdapter,
  By,
  Title
} from 'angular2/src/platform/browser_common';

import {Type, isPresent, CONST_EXPR} from 'angular2/src/facade/lang';
import {Promise} from 'angular2/src/facade/promise';
import {
  BROWSER_PROVIDERS,
  BROWSER_APP_COMMON_PROVIDERS
} from 'angular2/src/platform/browser_common';
import {ComponentRef, platform, reflector} from 'angular2/core';

/**
 * An array of providers that should be passed into `application()` when bootstrapping a component
 * when all templates
 * have been precompiled offline.
 */
export const BROWSER_APP_PROVIDERS: Array<any /*Type | Provider | any[]*/> =
    BROWSER_APP_COMMON_PROVIDERS;

/**
 * See {@link bootstrap} for more information.
 */
export function bootstrapStatic(appComponentType: Type,
                                customProviders?: Array<any /*Type | Provider | any[]*/>,
                                initReflector?: Function): Promise<ComponentRef> {
  if (isPresent(initReflector)) {
    initReflector();
  }

  let appProviders =
      isPresent(customProviders) ? [BROWSER_APP_PROVIDERS, customProviders] : BROWSER_APP_PROVIDERS;
  return platform(BROWSER_PROVIDERS).application(appProviders).bootstrap(appComponentType);
}