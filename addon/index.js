import { create }      from './create';                   export { create };
import { collection }  from './collection';               export { collection };
import { clickable }   from './actions/clickable';        export { clickable };
import { clickOnText } from './actions/click-on-text';    export { clickOnText };
import { fillable }    from './actions/fillable';         export { fillable }; export const selectable = fillable;
import { visitable }   from './actions/visitable';        export { visitable };
import { contains }    from './predicates/contains';      export { contains };
import { hasClass }    from './predicates/has-class';     export { hasClass };
import { isHidden }    from './predicates/is-hidden';     export { isHidden };
import { isVisible }   from './predicates/is-visible';    export { isVisible };
import { notHasClass } from './predicates/not-has-class'; export { notHasClass };
import { attribute }   from './queries/attribute';        export { attribute };
import { count }       from './queries/count';            export { count };
import { text }        from './queries/text';             export { text };
import { value }       from './queries/value';             export { value };

export { buildSelector, findElementWithAssert, findElement } from './helpers';

export default {
  attribute,
  clickOnText,
  clickable,
  collection,
  contains,
  count,
  create,
  fillable,
  hasClass,
  isHidden,
  isVisible,
  notHasClass,
  selectable,
  text,
  value,
  visitable
};
