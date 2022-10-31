import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { Observable } from 'rxjs';

export const INTRO_KEY = 'intro-seen';
@Injectable({
  providedIn: 'root'
})

export class IntroGuard implements CanLoad {
  constructor(private router: Router){}


  async canLoad(): Promise<boolean> {
    const hasSeenIntro = await Preferences.get({key: INTRO_KEY});
    try {
      if (hasSeenIntro && (hasSeenIntro.value === 'true')) {
        return true;
      } else {
        this.router.navigateByUrl('/intro', { replaceUrl:true });
        return false;
      }
    }catch (e) {
      console.log(e);
    }
  }
}

