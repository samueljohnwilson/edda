<template>
  <v-container>
    <h1>HISTORY</h1>
    <v-card class="timeline-wrapper">
      <timeline>
        <timeline-item>
          <img src="@/assets/icons/time-trap.png" slot="others" />
          <v-card-title>The Long Past</v-card-title>
          <v-card-text>
            In the beginning, there was only Enoreth, the Sum of All Things.
            This was an age before time.
          </v-card-text>
        </timeline-item>
        <timeline-item id="urdor">
          <img src="@/assets/icons/wind-hole.png" slot="others" />
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
        <timeline-item id="illyum">
          <img src="@/assets/icons/holy-oak.png" slot="others" />
          <v-card-title>
            The Illyum
          </v-card-title>
          <v-card-subtitle>
            1 First Age
          </v-card-subtitle>
          <v-card-text>
            Enoreth itself created the first sentient race, the Illyum, born
            from the roots of Ael, the First Tree. Living among animals in
            Ulwyll, the Old Forest, the Illyum remained in balance with the
            natural world for millennia.
          </v-card-text>
        </timeline-item>
        <timeline-item id="war-of-schism">
          <img src="@/assets/icons/crossed-swords.png" slot="others" />
          <v-card-title>
            The War of the Schism
          </v-card-title>
          <v-card-subtitle>
            40,032 First Age
          </v-card-subtitle>
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
        <timeline-item id="elves-passing">
          <img src="@/assets/icons/galleon.png" slot="others" />
          <v-card-title>
            War's End and the Passing of the Elves
          </v-card-title>
          <v-card-subtitle>
            41,030 First Age
          </v-card-subtitle>
          <v-card-text>
            Though Enoreth had always refrained from direct involvement in the
            affairs of the world, the war raged for too long; it finally
            intervened to restore balance to Ulwyll. The Illyum were cast away
            from the First Tree, forced into exile from their ancient home, and
            they set across the sea to the west. Upon their arrival in Edda,
            those fouled by the Malor settled in the mountains of the far north;
            those blessed by the Eyar settled in a forest in the farthest west,
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
        <timeline-item id="second-age">
          <img src="@/assets/icons/ages.png" slot="others" />
          <v-card-title>
            The Children of Othar
          </v-card-title>
          <v-card-subtitle>
            1 Second Age
          </v-card-subtitle>
          <v-card-text>
            Upon their arrival in the west, the Urdor wandered the lands of
            Edda. As Othar traveled the world, he filled it with living things,
            among them the races of halflings, men, dwarves, and the jötnar.
          </v-card-text>
        </timeline-item>
        <timeline-item id="edification">
          <img src="@/assets/icons/gift-of-knowledge.png" slot="others" />
          <v-card-title>
            The Edification
          </v-card-title>
          <v-card-subtitle>
            32 Second Age
          </v-card-subtitle>
          <v-card-text>
            The Urdor enjoyed the adulation of the mortal races, and for a time,
            the balance held in Edda.
          </v-card-text>
        </timeline-item>
        <timeline-item id="andor-invasion">
          <img src="@/assets/icons/sword-brandish.png" slot="others" />
          <v-card-title>
            The Andor Invasion
          </v-card-title>
          <v-card-subtitle>
            9025 Second Age
          </v-card-subtitle>
          <v-card-text>
            The men of Andor invade
          </v-card-text>
        </timeline-item>
        <timeline-item id="cataclysm">
          <img src="@/assets/icons/meteor-impact.png" slot="others" />
          <v-card-title>
            The Blackrock
          </v-card-title>
          <v-card-subtitle>
            11,903 Second Age
          </v-card-subtitle>
          <v-card-text>
            Meteor strike
          </v-card-text>
        </timeline-item>
        <timeline-item id="great-war">
          <img src="@/assets/icons/crossed-swords.png" slot="others" />
          <v-card-title>
            The Great War Begins
          </v-card-title>
          <v-card-subtitle>
            12,176 Second Age
          </v-card-subtitle>
          <v-card-text>
            Eventually, war became inevitable. The dwarves remained loyal to
            Othar and took up arms alongside the elves of Neywyll, while most
            jötnar swore loyalty to the Malor. The orcs emerged from the depths
            of the mountains to serve their dark masters in battle. Men were
            divided in their loyalties; nations and families alike were torn
            apart. The Great War would be fought by the pawns of the Eyar and
            Malor for two centuries. During this time, many of the empires of
            men would be wiped from existence and the land itself was razed.
          </v-card-text>
        </timeline-item>
        <timeline-item id="plague-of-akura">
          <img src="@/assets/icons/death-juice.png" slot="others" />
          <v-card-title>
            The Plague of Akura
          </v-card-title>
          <v-card-subtitle>
            12,179 Second Age
          </v-card-subtitle>
          <v-card-text>
            They dead
          </v-card-text>
        </timeline-item>
        <timeline-item id="great-betrayal">
          <img src="@/assets/icons/backstab.png" slot="others" />
          <v-card-title>
            The Great Betrayal
          </v-card-title>
          <v-card-subtitle>
            12,350 Second Age
          </v-card-subtitle>
          <v-card-text>
            They dead
          </v-card-text>
        </timeline-item>
        <timeline-item id="third-age">
          <img src="@/assets/icons/rally-the-troops.png" slot="others" />
          <v-card-title>
            Peace and the Godsdeath
          </v-card-title>
          <v-card-subtitle>
            12,357 Second Age
          </v-card-subtitle>
          <v-card-text>
            They dead
          </v-card-text>
        </timeline-item>
      </timeline>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Timeline, TimelineItem } from 'vue-cute-timeline';
import VueScrollTo from 'vue-scrollto';

@Component({
  components: {
    Timeline,
    TimelineItem,
  },
})
export default class History extends Vue {
  private mounted() {
    if (this.$route.query.event) {
      VueScrollTo.scrollTo(`#${this.$route.query.event}`, 500);
    }
  }
}
</script>

<style lang="less">
.timeline-item img {
  width: 30px;
  height: 30px;
}
</style>
