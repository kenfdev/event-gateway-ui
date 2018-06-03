// https://github.com/josdejong/jsoneditor/blob/master/docs/api.md
import JSONEditor from 'jsoneditor/dist/jsoneditor';
import 'jsoneditor/dist/jsoneditor.min.css';

const modes = ['code', 'view'];

export default {
  name: 'v-jsoneditor',
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    value: {
      default() {
        return {};
      }
    }
  },
  data() {
    return {jsoneditor: null};
  },
  watch: {
    value(newValue, oldValue) {
      this
        .jsoneditor
        .set(newValue);
    }
  },
  methods: {
    getOptions() {
      const defaults = {
        escapeUnicode: false,
        // history: true,
        indentation: 2,
        mode: modes[0],
        modes: modes.slice(0)
        // navigationBar: true,
        // search: true,
        // statusBar: true,
        // sortObjectKeys: false
      };

      return Object.assign({}, defaults, this.options, {
        onChange: this.onChange,
        onError: this.onError
      });
    },
    onChange() {
      try {
        const value = this
          .jsoneditor
          .get();
        this.$emit('input', value);
        // eslint-disable-next-line
      } catch (e) {}
    },
    onError(error) {
      this.$emit('error', error);
    }
  },
  render(h) {
    return h('div', {ref: 'jsoneditor'});
  },
  mounted() {
    this.jsoneditor = new JSONEditor(this.$refs.jsoneditor, this.getOptions(), this.value);

    this.onChange();
  },
  beforeDestroy() {
    this
      .jsoneditor
      .destroy();
    this.jsoneditor = null;
  }
};
