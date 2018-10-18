package com.github.davinkevin.podcastserver.manager.worker

import lan.dk.podcastserver.entity.Podcast

/**
 * Created by kevin on 22/02/15.
 */
interface Finder {
    fun find(url: String): Podcast
    fun compatibility(url: String?): Int
}
