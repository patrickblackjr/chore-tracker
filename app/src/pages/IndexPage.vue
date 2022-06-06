<template>
  <q-page padding>
    <div class="row full-width items-center justify-center q-my-md">
      <div class="col-5">
        <new-chore-quick></new-chore-quick>
        <div v-if="chores">
          {{ chores.chores }}
        </div>
      </div>
    </div>
    <div class="row full-width items-center justify-center q-my-md">
      <div class="col-5">
        <q-list bordered padding>
          <q-item-label header>Chores</q-item-label>

          <q-item
            tag="label"
            v-ripple
            v-for="chore in chores.chores"
            :key="chore.id"
          >
            <q-item-section>
              <q-item-label>{{ chore.title }}</q-item-label>
              <q-item-label caption>
                {{ chore.description }}
              </q-item-label>
            </q-item-section>
            <!-- <q-item-section side top>
              <q-btn color="primary" flat icon="edit" @click="onClick" />
            </q-item-section> -->
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
import NewChoreQuick from 'components/NewChoreQuick.vue'
import { useChoresStore } from 'src/stores/chores'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  components: { NewChoreQuick },
  setup() {
    const chores = useChoresStore()
    chores.fetchChores()

    return {
      chores,
    }
  },
})
</script>
