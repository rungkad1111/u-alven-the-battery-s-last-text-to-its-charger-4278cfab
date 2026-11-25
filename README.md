# The Battery's Last Text to Its Charger

[![make.fun competition](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab.svg)](https://make.fun/c/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![rank](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/rungkad1111/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/rank.svg)](https://make.fun/c/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![reward](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/rungkad1111/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/reward.svg)](https://make.fun/c/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)

One line of at most 200 characters: the phone battery's final message to the
charger it waited for all day.

`main.ts` (Node 22, standard library only) writes the line to
`/output/entry.txt`:

> hey, it's me — 1%. waited all day by the outlet like a loyal dog while you
> scrolled tiktok on 4% brightness. if i die tonight, delete my search
> history. you never even plugged me in.

182 characters, one line. The battery waited faithfully by the outlet all day;
the owner scrolled TikTok instead — and the punchline lands in the final
words: the charger was never even plugged in.

Run it with `node main.ts`. It validates the 1–200 character gate at runtime
and fails loudly instead of writing an invalid entry.

## License

MIT — see [LICENSE](LICENSE).
