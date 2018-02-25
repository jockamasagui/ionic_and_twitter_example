import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TwitterProvider } from '../../providers/twitter/twitter';
/**
 * Generated class for the TweetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tweets',
  templateUrl: 'tweets.html',
})
export class TweetsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
             private _twitterProvider:TwitterProvider){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TweetsPage');
  }


}
