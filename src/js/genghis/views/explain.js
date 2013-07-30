Genghis.Views.Explain = Backbone.View.extend({
    el: 'section#explain',
    template: Genghis.Templates.Explain,
    initialize: function() {
        _.bindAll(this, 'render');

        this.model.bind('sync', this.updateExplain, this);

        this.render();
    },
    render: function() {
        this.$el.html(this.template.render({}));
        Genghis.Util.attachCollapsers(this.$('article')[0]);
        return this;
    },
    updateExplain: function() {
        this.$('.document').html(this.model.prettyPrint());
        this.$el.removeClass('spinning');
    },
    show: function() {
        $('body').addClass('section-' + this.$el.attr('id'));
        this.$el.addClass('spinning').show();
        $(document).scrollTop(0);
    },
    hide: function() {
        $('body').removeClass('section-' + this.$el.attr('id'));
        this.$el.hide();
    }
});