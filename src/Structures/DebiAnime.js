import { clientOptions } from "../Configs/clientOptions.js";
import { Client, Collection } from "discord.js";
import Loader from "../Utils/Loader.js";

export default class DebiAnime extends Client {
  constructor(options = {}) {
    super(clientOptions);
    this.setup(options);
    
    this.interactionCommands = new Collection();
    this.messageCommands = new Collection();
    this.loader = new Loader(this);
  }

  setup(options) {
    this.guild = options.guild;
    this.bot = options.bot;
    this.color = options.color;
  }

  async start() {
    await this.loader.execute();
    await this.login(this.bot.TOKEN);
  }
}
