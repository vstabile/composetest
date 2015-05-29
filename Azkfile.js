/**
 * Documentation: http://docs.azk.io/Azkfile.js
 */

// Adds the systems that shape your system
systems({
  web: {
    // Dependent systems
    depends: ["redis"],
    // More images:  http://images.azk.io
    image: {"docker": "python:2.7"},
    provision: [
      "pip install --user --allow-all-external -r requirements.txt"
    ],
    workdir: "/azk/#{manifest.dir}",
    shell: "/bin/bash",
    command: "python app.py",
    wait: {"retry": 20, "timeout": 1000},
    mounts: {
      '/azk/#{manifest.dir}': path("."),
    },
    http: {
      domains: [ "#{system.name}.#{azk.default_domain}" ]
    },
  },
  redis: {
    image: {"docker": "redis"}
  }
});



