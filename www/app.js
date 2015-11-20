import angular from 'angular';
import SearchModule from './search/search';
import PodcastsModule from './podcasts/podcasts';
import ItemModule from './item/item';
import DownloadModule from './download/download';
import PlayerModule from './player/player';
import StatsModule from './stats/stats';
import ConfigModule from './config/config';

let app = angular.module('podcastApp', [
    SearchModule.name,
    PodcastsModule.$angularModule.name,
    ItemModule.name,
    DownloadModule.name,
    PlayerModule.name,
    StatsModule.name,
    ConfigModule.name
]);

angular.element(document).ready(() =>  angular.bootstrap(document, [ app.name ], { strictDi: false }));