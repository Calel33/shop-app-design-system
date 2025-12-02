import os
import json
import datetime


ROOT = os.path.dirname(os.path.abspath(__file__))


def build_index(root: str) -> dict:
    index = {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://testdesign.local/ui2/component-index.json",
        "meta": {
            "name": "UI2 Component Index",
            "version": "1.0.0",
            "description": "Index of UI2 composable sections, primitives, hooks, and types under design-system/components/ui2",
            "lastUpdated": datetime.date.today().isoformat(),
            "rootDirectory": "design-system/components/ui2",
        },
        "namespaces": {},
    }

    for dirpath, _, filenames in os.walk(root):
        for fname in filenames:
            if not (fname.endswith(".tsx") or fname.endswith(".ts")):
                continue

            full_path = os.path.join(dirpath, fname)
            rel = os.path.relpath(full_path, root)
            rel_posix = rel.replace(os.sep, "/")
            parts = rel_posix.split("/")

            if parts[0] == "components":
                ns_parts = parts[1:-1]
            else:
                ns_parts = parts[:-1]

            ns_key = ".".join(ns_parts) if ns_parts else "root"

            ns = index["namespaces"].setdefault(
                ns_key,
                {
                    "description": "",
                    "location": f"design-system/components/ui2/{'/'.join(parts[:-1])}",
                    "components": {},
                },
            )

            comp_name = os.path.splitext(fname)[0]
            ns["components"][comp_name] = {
                "file": rel_posix,
            }

    return index


def main() -> None:
    index = build_index(ROOT)
    out_path = os.path.join(ROOT, "component-index.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(index, f, indent=2)

    print(out_path)


if __name__ == "__main__":
    main()
