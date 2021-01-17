<template>
  <v-container>
    <h1>HISTORY</h1>
    <v-card class="timeline-wrapper">
      <timeline>
        <timeline-item>
          <font-awesome-icon icon="bahai" slot="others" />
          <v-card-title>The Long Past</v-card-title>
          <v-card-text>
            In the beginning, there was only Enoreth, the Sum of All Things.
            This was an age before time.
          </v-card-text>
        </timeline-item>
        <timeline-item>
          <font-awesome-icon icon="bahai" slot="others" />
          <v-card-title>The Urdor</v-card-title>
          <v-card-text>
            To fill the world with life, Enoreth separated three parts from
            itself; each parts was then split in two. From the first part were
            born Othar, The Allfather, and Malak, The Devourer. From the second
            part came Cerunnos, The Arbiter, and Ulat Banor, The Maelstrom. From
            the last came Eos, The Dawnbringer, and Eth Korel, The Duskfall.
            Separately, the benevolent powers are known as the Eyar, and the
            malevolent as the Malor. Together, they are the Urdor. The balance
            of their constructive and destructive forces allowed for the cycles
            of nature and the existence of life.
          </v-card-text>
        </timeline-item>
        <timeline-item>
          <font-awesome-icon icon="bahai" slot="others" />
          <v-card-title>
            1 First Age: The Illyum
          </v-card-title>
          <v-card-text>
            Enoreth itself created the first sentient race, the Illyum, born
            from the roots of the First Tree. Living among animals in Ulwyll,
            the Old Forest, the Illyum remained in balance with the natural
            world for millennia.
          </v-card-text>
        </timeline-item>
        <timeline-item>
          <font-awesome-icon icon="bahai" slot="others" />
          <v-card-title>
            40,032 First Age: The War of the Schism
          </v-card-title>
          <v-card-text>
            Over millennia, the Eyar and the Malor sought to compel the Illyum
            into their service. Over the ages, the Illyum became divided and
            eventually set upon one another in war. The War of the Schism raged
            in Ulwyll for nearly a thousand years, and the Eyar and Malor
            brought forth beings from Eya and Mora to wage war alongside the
            ranks of the Illyum. As the years passed, each faction was changed
            by proximity to the power it served. Those that worshipped the Malor
            were fouled and their descendants are the orcs. Those that
            worshipped the Eyar were blessed and their descendants are the
            elves.
          </v-card-text>
        </timeline-item>
        <timeline-item>
          <font-awesome-icon icon="bahai" slot="others" />
          <v-card-title>
            41,030 First Age: War's End
          </v-card-title>
          <v-card-text>
            Though Enoreth had always refrained from direct involvement in the
            affairs of the world, the war raged for too long; it finally
            intervened to restore balance to Ulwyll. The Illyum were cast away
            from the First Tree, forced into exile from their ancient home, and
            they set across the sea to the west. Upon their arrival in Edda,
            those fouled by the Malor settled in the mountains of the far north;
            those blessed by the Eiar settled in a forest in the farthest west,
            which they call Neywyll, the Young Forest.
          </v-card-text>
          <v-card-text>
            The passing of the elves and orcs from Ulwyll marks the end of the
            First Age. During this time, the Urdor were also banished from
            Ulwyll and would wander the western lands throughout the Second Age.
            Though nearly all of the Illyum were cast away from the First Tree,
            a small group was selected from among them to remain in Ulwyll. They
            were sworn to uphold the balance of Enoreth and to protect the First
            Tree from outside forces, both evil and good.
          </v-card-text>
        </timeline-item>
        <timeline-item>
          <font-awesome-icon icon="bahai" slot="others" />
          <v-card-title>
            1 Second Age: The Children of Othar
          </v-card-title>
          <v-card-text>
            Upon their arrival in the west, the Urdor wandered the lands of
            Edda. As Othar traveled the world, he filled it with living things,
            among them the races of halflings, men, dwarves, and the jötnar. The
            Urdor enjoyed the adulation of the mortal races, and for a time, the
            balance held in Edda.
          </v-card-text>
          <v-card-text>
            The passing of the elves and orcs from Ulwyll marks the end of the
            First Age.
          </v-card-text>
        </timeline-item>
        <timeline-item>
          <font-awesome-icon icon="bahai" slot="others" />
          <v-card-title>
            12,176 Second Age: The Great War
          </v-card-title>
          <v-card-text>
            Upon their arrival in the west, the Urdor wandered the lands of
            Edda. As Othar traveled the world, he filled it with living things,
            among them the races of halflings, men, dwarves, and the jotnar. For
            millennia, the Urdor enjoyed the adulation of the mortal races, and
            for a time, the balance held in Edda. However, the eventual fate of
            Othar’s creations was much the same as that of the Illyum, as the
            Urdor were drawn into conflict again.
          </v-card-text>
        </timeline-item>
      </timeline>
    </v-card>
  </v-container>
</template>

<script>
import { Timeline, TimelineItem } from 'vue-cute-timeline';

export default {
  components: {
    Timeline,
    TimelineItem,
  },
};
</script>
