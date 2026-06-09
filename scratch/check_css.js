const fs = require('fs');
const css = fs.readFileSync('temp_css.css', 'utf8');

const classes = [
  'relative', 'bg-white', 'pt-28', 'pb-24', 'lg:pt-40', 'lg:pb-32', 'overflow-hidden',
  'container', 'mx-auto', 'px-5', 'px-10', 'z-10', 'shrink-0', 'w-full',
  'max-w-[1100px]', 'text-left', 'mb-16',
  'border-t', 'border-slate-200', 'pt-10', 'pb-16', 'pb-24', 'pb-32', 'grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-8', 'gap-16',
  'lg:col-span-7', 'flex', 'flex-col', 'justify-start', 'items-start',
  'font-body', 'text-lg', 'text-xl', 'text-[22px]', 'text-pencil', 'leading-relaxed', 'font-medium', 'max-w-[580px]',
  'mt-6', 'inline-flex', 'items-center', 'gap-2', 'text-xs', 'font-bold', 'uppercase', 'tracking-widest', 'text-ink-blue', 'hover:text-coral', 'transition-colors', 'cursor-pointer', 'border-none', 'bg-transparent', 'p-0', 'outline-none', 'group',
  'lg:col-span-5', 'space-y-2', 'max-w-[320px]', 'lg:max-w-none', 'lg:ml-auto', 'border-b', 'border-slate-100', 'pb-2', 'pb-1', 'font-bold', 'text-ink-dark'
];

classes.forEach(c => {
  // Escape backslash and special chars for css selector
  const escaped = c
    .replace(/\[/g, '\\[')
    .replace(/\]/g, '\\]')
    .replace(/\//g, '\\/')
    .replace(/:/g, '\\:')
    .replace(/\./g, '\\.');
  
  // Look for .escaped { ... }
  const regex = new RegExp('\\.' + escaped + '\\s*\\{[^\\}]*\\}', 'g');
  const matches = css.match(regex);
  if (matches) {
    console.log(`Class: ${c} -> Found:`, matches.map(m => m.replace(/\s+/g, ' ')));
  } else {
    console.log(`Class: ${c} -> NOT FOUND`);
  }
});
