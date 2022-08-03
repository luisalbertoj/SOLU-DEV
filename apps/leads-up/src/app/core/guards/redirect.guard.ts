import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class RedirectGuard implements CanActivate {
  constructor(public router: Router) {}

  canActivate(
    _next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> | boolean {
    const originalRequestUrl = state.url;

    if (this.isOldUrl(originalRequestUrl)) {
      this.router.navigate([this.getRedirectUrl(originalRequestUrl)]);
      return false;
    }

    return true;
  }

  isOldUrl(_url: string): boolean {
    // pattern check on URL to determine if url needs redirect
    return true;
  }

  getRedirectUrl(url: string): string {
    // logic to return redirect-url of final destination
    // returning same url for now
    return url;
  }
}
