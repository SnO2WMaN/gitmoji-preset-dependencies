import test from "ava";

import presets from "..";

presets.forEach(preset => {
  test(`Test for ${preset.name}`, t => {
    t.is(typeof preset.emoji, "string");
    t.regex(preset.name, /^.+(_.+)*$/);
    t.false(preset.name.includes(":"));
    t.is(typeof preset.description, "string");
  });
});
