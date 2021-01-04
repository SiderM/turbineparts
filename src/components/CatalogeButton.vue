<template>
  <div>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#openModal">
      <i class="bi bi-question-circle"></i>
    </button>

    <div class="modal fade" id="openModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Название инструкции</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Текст инструкции
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Закрыть</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CatalogeButton",
        props: {
            instruction: {
                type: String
            }
        },
        data() {
            return {
                instructionData: {}
            }
        },
        methods: {
            getInstruction() {
                this.axios.get(`${process.env.BASE_URL}instruction/${this.instruction}.json`).then(response => {
                    return this.instructionData = response.data
                })
            }
        },
        created() {
            this.getInstruction()
        }
    }
</script>

<style scoped>

</style>