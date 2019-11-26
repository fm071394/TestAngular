import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AllEmojiComponent } from './component/all-emoji/all-emoji.component' 
import { FavoriteEmojiComponent } from './component/favorite-emoji/favorite-emoji.component';
import { RemoteEmojiComponent } from './component/remote-emoji/remote-emoji.component';

const routes: Routes = [
  { path: '', redirectTo: '/emoji/all', pathMatch: 'full'},
  { path: 'emoji/all', component: AllEmojiComponent },
  { path: 'emoji/favorite', component: FavoriteEmojiComponent },
  { path: 'emoji/remove', component: RemoteEmojiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
