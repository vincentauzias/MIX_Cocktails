<template>
    <section class="chat-bot">
        <div class="chat-bot-list-container" ref="chatbot">
            <ul class="chat-bot-list">
                <li
                    class="message"
                    v-for="(message, index) in messages"
                    :key="index"
                    :class="message.author"
                >
                    <p>
                        <span>{{ message.text }}</span>
                    </p>
                </li>
            </ul>
        </div>
        <div class="chat-inputs">
            <input type="text" v-model="message" @keyup.enter="sendMessage" />
            <button @click="sendMessage">Envoyer</button>
        </div>
    </section>
</template>

<script>
export default {
    name: "ChatBot",
    data() {
        return {
            message: "",
            messages: [],
        };
    },
    methods: {
        sendMessage() {
            this.messages.push({
                text: this.message,
                author: "client",
            });

            this.message = "";

            this.$axios
                .get(
                    `https://www.cleverbot.com/getreply?key=CC8uqcCcSO3VsRFvp5-uW5Nxvow&input=${this.message}`
                )
                .then((res) => {
                    this.messages.push({
                        text: res.data.output,
                        author: "server",
                    });

                    this.$nextTick(() => {
                        this.$refs.chatbot.scrollTop =
                            this.$refs.chatbot.scrollHeight;
                    });
                });
        },
    },
};
</script>

<style scoped>
.chat-bot {
    position: fixed;
    bottom: 10%;
    right: 45px;
    justify-content: space-between;
    width: 290px;
    height: 350px;
    margin-right: auto;
    margin-left: auto;
    z-index: 101;
    backdrop-filter: blur(10px);
    border-radius: 10px 10px 0 0;
}

.chat-bot,
.chat-bot-list {
    display: flex;
    flex-direction: column;
    list-style-type: none;
}

.chat-bot-list-container {
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
}

.chat-bot-list-container::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
}

.chat-bot-list {
    padding: 0 10px;
}

.chat-bot-list span {
    overflow-wrap: anywhere;
    padding: 10px;
}

.chat-bot-list .server span {
    background-color: #90c5f2;
    border-radius: 25px 25px 25px 4px;
    float: left;
}

.chat-bot-list .client span {
    background-color: #bace6a;
    border-radius: 25px 25px 4px 25px;
    float: right;
}

.chat-inputs {
    display: flex;
}

.chat-inputs input {
    line-height: 2;
    width: 100%;
    padding-left: 15px;
    border: 1px solid #333;
    border-radius: 10px 0 0 10px;
    border-right: none;
    outline: none;
}

.chat-inputs button {
    border: 1px solid #333;
    border-radius: 0 10px 10px 0;
    background-color: rgb(201, 197, 197);
}

@media screen and (max-width: 450px) and (orientation: portrait) {
    .chat-bot {
        bottom: 3%;
        width: 250px;
    }
}
</style>
