import { Injectable } from '@angular/core';

@Injectable()
export class TokenProvider {
  load() {
    return new Promise((resolve) => {
      resolve(true);
    });
  }
}
