    # Directives:

    Directives are classes that add additional behavior to the html elements/angular components:

    Three types of directives:

    Attribute directives:
    Provides a way to manipulate the default html attributes.

    We can provide directives to regular html tag attributes, like value, class, style etc.

    Inbuilt directives: ngModel, ngStyle, ngClass.

    Eg: <a [href] ="link"> </a>

    Here href is data binded to link variable. Whenever link variable is changed href value is changed.

    Structural directives:

    Structural directives, modify the structure of the html. Like ngFor, ngIf,ngSwitch.

    Component directives => all custom angular components are component directives.
